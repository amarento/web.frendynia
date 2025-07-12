import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env";
import * as schema from "./schema";

const db = drizzle(postgres(env.DATABASE_URL), { schema });

async function seed() {
  console.log("Seeding ...");
  console.time("DB has been seeded!");

  /** seed database */
  console.log("Seeding done!");
  // await db.insert(guests).values(defaults);
}

seed()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
