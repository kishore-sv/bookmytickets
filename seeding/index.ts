import { db } from "../app/db";
import { cinemasTable } from "../app/db/schema";


const cinemaValues = [
  {
    name: "INOX: Garuda",
    location: "Bengaluru",
    totalSeats: 200,
  },
  {
    name: "PVR: Garuda",
    location: "Bengaluru",
    totalSeats: 180,
  },
];

async function seedCinemas() {
  const inserted = await db
    .insert(cinemasTable)
    .values(cinemaValues)
    .returning();

  console.log("Cinemas seeded:", inserted);
  return inserted;
}


seedCinemas().catch(console.error);
