import { db } from "@/app/db";
import { showsTable, bookingsTable } from "@/app/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { showId, tickets, email } = body;

    // 1️⃣ Validate input
    if (!showId || !tickets || tickets <= 0 || !email) {
      return NextResponse.json(
        { success: false, message: "Invalid request data" },
        { status: 400 }
      );
    }

    // 2️⃣ Transaction = NO race conditions
    const result = await db.transaction(async (tx) => {
      // Lock the show row
      const [show] = await tx
        .select()
        .from(showsTable)
        .where(eq(showsTable.id, showId))
        .for("update");

      if (!show) {
        throw new Error("Show not found");
      }

      if (show.availableSeats < tickets) {
        throw new Error("Not enough seats available");
      }

      // 3️⃣ Decrement seats
      await tx
        .update(showsTable)
        .set({
          availableSeats: sql`${showsTable.availableSeats} - ${tickets}`,
        })
        .where(eq(showsTable.id, showId));

      // 4️⃣ Create booking
      const [booking] = await tx
        .insert(bookingsTable)
        .values({
          showId,
          ticketsBooked: tickets,
          email,
        })
        .returning();

      return booking;
    });

    return NextResponse.json(
      {
        success: true,
        message: "Tickets booked successfully",
        booking: result,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Booking error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Ticket booking failed",
      },
      { status: 400 }
    );
  }
}
