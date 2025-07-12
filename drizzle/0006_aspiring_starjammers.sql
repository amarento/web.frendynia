CREATE TABLE IF NOT EXISTS "amarento.id_client_to_guests" (
	"client_id" integer NOT NULL,
	"guest_id" integer NOT NULL,
	CONSTRAINT "amarento.id_client_to_guests_client_id_guest_id_pk" PRIMARY KEY("client_id","guest_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_client_to_guests" ADD CONSTRAINT "amarento.id_client_to_guests_client_id_amarento.id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."amarento.id_clients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "amarento.id_client_to_guests" ADD CONSTRAINT "amarento.id_client_to_guests_guest_id_amarento.id_guests_id_fk" FOREIGN KEY ("guest_id") REFERENCES "public"."amarento.id_guests"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
