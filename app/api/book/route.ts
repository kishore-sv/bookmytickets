import { db } from "@/app/db";
import { bookedSeats, showsTable } from "@/app/db/schema";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, seatRow, seatCol, showId } = await req.json();

    console.log(amount, seatRow, seatCol, showId);

    if (!amount || !seatRow || !seatCol || !showId) {
      return NextResponse.json(
        {
          error: "Bad request",
          message: "All fields are required"
        },
        { status: 400 }
      );
    }


    const seatBooked = await db.insert(bookedSeats)
      .values({ amount, seatRow, seatCol, showId })
      .onConflictDoNothing()
      .returning();

    if (seatBooked.length === 0) {
      return NextResponse.json(
        {
          error: "Booking failed",
          message: "Seat already booked"
        },
        { status: 409 }
      );
    }


    await db.update(showsTable)
      .set({ availableSeats: sql`available_seats - 1` })
      .where(eq(showsTable.id, showId));

    console.log('Booking successful:', seatBooked[0]);

    return NextResponse.json(
      {
        success: true,
        message: "Seat booked successfully",
        data: seatBooked[0]
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Booking error:', error);
    
    return NextResponse.json(
      {
        error: "Booking failed",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 400 }
    );
  }
}