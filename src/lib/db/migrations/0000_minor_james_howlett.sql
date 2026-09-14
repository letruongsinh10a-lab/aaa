CREATE TABLE "activity_heatmap" (
	"user_id" uuid NOT NULL,
	"date" date NOT NULL,
	"xp" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "activity_heatmap_user_id_date_pk" PRIMARY KEY("user_id","date")
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"display_name" text NOT NULL,
	"avatar_url" text,
	"level" integer DEFAULT 1 NOT NULL,
	"xp" integer DEFAULT 0 NOT NULL,
	"xp_today" integer DEFAULT 0 NOT NULL,
	"streak_days" integer DEFAULT 0 NOT NULL,
	"last_study_date" date,
	"cards_reviewed_today" integer DEFAULT 0 NOT NULL,
	"minutes_today" integer DEFAULT 0 NOT NULL,
	"timezone" text DEFAULT 'Asia/Ho_Chi_Minh' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "srs_entries" (
	"user_id" uuid NOT NULL,
	"card_id" text NOT NULL,
	"interval_days" real DEFAULT 0 NOT NULL,
	"ease_factor" real DEFAULT 2.5 NOT NULL,
	"due_date" date NOT NULL,
	"review_count" integer DEFAULT 0 NOT NULL,
	"lapse_count" integer DEFAULT 0 NOT NULL,
	"last_reviewed" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "srs_entries_user_id_card_id_pk" PRIMARY KEY("user_id","card_id")
);
--> statement-breakpoint
ALTER TABLE "activity_heatmap" ADD CONSTRAINT "activity_heatmap_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "srs_entries" ADD CONSTRAINT "srs_entries_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;