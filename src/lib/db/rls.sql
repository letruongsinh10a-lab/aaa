-- Run once via Supabase Dashboard → SQL Editor after `npm run db:push` has
-- created the tables. This file is the source of truth for RLS + the
-- auto-profile trigger; drizzle-kit does not manage cross-schema triggers on
-- auth.users, so it isn't part of the Drizzle schema/push flow.

-- Auto-create a profile row whenever a new auth.users row appears
-- (covers email/password signup and every OAuth provider, incl. Google).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    ),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.srs_entries enable row level security;
alter table public.activity_heatmap enable row level security;

create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
-- Deliberately no insert/delete policy on profiles: rows are created only by
-- the SECURITY DEFINER trigger above (which bypasses RLS as the function
-- owner) and removed only via ON DELETE CASCADE from auth.users.
-- Default-deny blocks any client-side insert/delete.

create policy "srs_select_own" on public.srs_entries
  for select using (auth.uid() = user_id);
create policy "srs_insert_own" on public.srs_entries
  for insert with check (auth.uid() = user_id);
create policy "srs_update_own" on public.srs_entries
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "srs_delete_own" on public.srs_entries
  for delete using (auth.uid() = user_id);

create policy "heatmap_select_own" on public.activity_heatmap
  for select using (auth.uid() = user_id);
create policy "heatmap_insert_own" on public.activity_heatmap
  for insert with check (auth.uid() = user_id);
create policy "heatmap_update_own" on public.activity_heatmap
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "heatmap_delete_own" on public.activity_heatmap
  for delete using (auth.uid() = user_id);
