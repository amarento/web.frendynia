ALTER TABLE "amarento.id_guestInfo" DROP CONSTRAINT "amarento.id_guestInfo_guest_id_amarento.id_guests_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_guestInfo" ADD CONSTRAINT "amarento.id_guestInfo_guest_id_amarento.id_guests_id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."amarento.id_guests"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
