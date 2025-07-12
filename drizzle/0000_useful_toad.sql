CREATE TABLE IF NOT EXISTS "amarento.id_account" (
	"user_id" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_account_id" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255),
	CONSTRAINT "amarento.id_account_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "amarento.id_clients" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"parents_name_groom" varchar(256),
	"parents_name_bride" varchar(256),
	"wedding_day" timestamp with time zone,
	"holmat_location" varchar(256),
	"holmat_time" timestamp with time zone,
	"dinner_location" varchar(256),
	"dinner_time" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "amarento.id_guests" (
	"id" serial PRIMARY KEY NOT NULL,
	"inv_names" varchar(256) NOT NULL,
	"guest_names" varchar(256),
	"wa_number" varchar(256) NOT NULL,
	"n_rsvp_plan" integer NOT NULL,
	"rsvp_dinner" boolean DEFAULT false,
	"rsvp_holmat" boolean DEFAULT false,
	"n_rsvp_holmat_act" integer,
	"n_rsvp_dinner_act" integer,
	"n_rsvp_holmat_wa" integer,
	"n_rsvp_dinner_wa" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	"client_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "amarento.id_session" (
	"session_token" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "amarento.id_user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"email_verified" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"image" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "amarento.id_verification_token" (
	"identifier" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL,
	CONSTRAINT "amarento.id_verification_token_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_account" ADD CONSTRAINT "amarento.id_account_user_id_amarento.id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."amarento.id_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_guests" ADD CONSTRAINT "amarento.id_guests_client_id_amarento.id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."amarento.id_clients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_session" ADD CONSTRAINT "amarento.id_session_user_id_amarento.id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."amarento.id_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_user_id_idx" ON "amarento.id_account" ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "amarento.id_guests" ("inv_names");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_id_idx" ON "amarento.id_session" ("user_id");