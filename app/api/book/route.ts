import { db } from "@/app/db";
import { bookedSeats, cinemasTable, showsTable } from "@/app/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, seatRow, seatCol, showId } = await req.json();

    console.log(amount, seatRow, seatCol, showId)

    const seatBooked=await db.insert(bookedSeats).values({amount, seatRow, seatCol, showId}).returning()

    return NextResponse.json(seatBooked)
  } catch (error) {
    return NextResponse.json(error)
  }
}
