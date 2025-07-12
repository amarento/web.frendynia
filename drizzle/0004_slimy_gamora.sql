CREATE TABLE IF NOT EXISTS "amarento.id_guestInfo" (
	"address" varchar(256),
	"note" varchar(256),
	"guest_id" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_guestInfo" ADD CONSTRAINT "amarento.id_guestInfo_guest_id_amarento.id_guests_id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."amarento.id_guests"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
