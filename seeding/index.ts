import { db } from "../app/db";
import { cinemasTable } from "../app/db/schema";


async function seedCinemas() {
  await db.insert(cinemasTable).values([
    {
      name: "PVR Cinemas",
      location: "Bengaluru",
      totalSeats: 200,
    },
    {
      name: "INOX Cinemas",
      location: "Hyderabad",
      totalSeats: 150,
    },
  ]);

  console.log("Cinemas seeded successfully");
}

seedCinemas().catch(console.error);
