ALTER TABLE "amarento.id_clients" RENAME COLUMN "name" TO "name_groom";--> statement-breakpoint
ALTER TABLE "amarento.id_clients" ADD COLUMN "name_bride" varchar(256);