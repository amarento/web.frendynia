ALTER TABLE "amarento.id_guests" ALTER COLUMN "updated_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "amarento.id_guests" ADD COLUMN "side" varchar(256);--> statement-breakpoint
ALTER TABLE "amarento.id_guests" ADD COLUMN "table_name" varchar(256);--> statement-breakpoint
ALTER TABLE "amarento.id_guests" ADD COLUMN "_angpaoGiven" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "amarento.id_guests" ADD COLUMN "_souvenirTaken" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "amarento.id_guests" ADD COLUMN "_angpaoTitipan" boolean DEFAULT false;