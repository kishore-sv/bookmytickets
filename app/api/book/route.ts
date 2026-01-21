import { db } from "@/app/db";
import { cinemasTable, showsTable } from "@/app/db/schema";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cinemasInput = [
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

    const cinemas = await db
      .insert(cinemasTable)
      .values(cinemasInput)
      .returning();

    const showTimes = ["10:00", "13:30", "17:00", "21:00"];

    const shows = cinemas.flatMap((cinema) =>
      showTimes.map((time) => ({
        cinemaId: cinema.id,
        showTime: time,
        totalSeats: cinema.totalSeats,
        availableSeats: cinema.totalSeats,
      }))
    );

    const insertedShows = await db
      .insert(showsTable)
      .values(shows)
      .returning();

    return NextResponse.json(
      {
        success: true,
        cinemas,
        shows: insertedShows,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Seed error:", error);

    return NextResponse.json(
      { success: false, message: "Seeding failed" },
      { status: 500 }
    );
  }
}
