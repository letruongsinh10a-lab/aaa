import { pgSchema, pgTable, uuid, text, integer, real, date, timestamp, primaryKey } from 'drizzle-orm/pg-core'

// Reference to Supabase's built-in auth.users table — not managed by us, just
// used so profiles.id can carry a real foreign key.
const authSchema = pgSchema('auth')
export const authUsers = authSchema.table('users', {
  id: uuid('id').primaryKey(),
})

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().references(() => authUsers.id, { onDelete: 'cascade' }),
  email: text('email').notNull(),
  displayName: text('display_name').notNull(),
  avatarUrl: text('avatar_url'),
  level: integer('level').notNull().default(1),
  xp: integer('xp').notNull().default(0),
  xpToday: integer('xp_today').notNull().default(0),
  streakDays: integer('streak_days').notNull().default(0),
  lastStudyDate: date('last_study_date', { mode: 'string' }),
  cardsReviewedToday: integer('cards_reviewed_today').notNull().default(0),
  minutesToday: integer('minutes_today').notNull().default(0),
  timezone: text('timezone').notNull().default('Asia/Ho_Chi_Minh'),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
})

export const srsEntries = pgTable('srs_entries', {
  userId: uuid('user_id').notNull().references(() => profiles.id, { onDelete: 'cascade' }),
  cardId: text('card_id').notNull(),
  // Fractional: sm2.ts uses 1/1440 and 10/1440 day learning steps — an integer
  // column would silently round these to 0.
  intervalDays: real('interval_days').notNull().default(0),
  easeFactor: real('ease_factor').notNull().default(2.5),
  dueDate: date('due_date', { mode: 'string' }).notNull(),
  reviewCount: integer('review_count').notNull().default(0),
  lapseCount: integer('lapse_count').notNull().default(0),
  lastReviewed: timestamp('last_reviewed', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.cardId] }),
}))

export const activityHeatmap = pgTable('activity_heatmap', {
  userId: uuid('user_id').notNull().references(() => profiles.id, { onDelete: 'cascade' }),
  date: date('date', { mode: 'string' }).notNull(),
  xp: integer('xp').notNull().default(0),
  updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'string' }).notNull().defaultNow(),
}, (t) => ({
  pk: primaryKey({ columns: [t.userId, t.date] }),
}))
