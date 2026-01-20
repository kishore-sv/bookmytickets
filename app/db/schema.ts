import { integer, pgTable, varchar, time, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const cinemasTable = pgTable("cinemas", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  totalSeats: integer("total_seats").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const showsTable = pgTable("shows", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  cinemaId: integer("cinema_id")
    .notNull()
    .references(() => cinemasTable.id, { onDelete: "cascade" }),

  showTime: time("show_time").notNull(),
  availableSeats: integer("available_seats").notNull(),
  totalSeats: integer("total_seats").notNull(),

  createdAt: timestamp("created_at").defaultNow(),
});

export const bookingsTable = pgTable("bookings", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  showId: integer("show_id")
    .notNull()
    .references(() => showsTable.id, { onDelete: "cascade" }),
  email: varchar("email", { length: 255 }).notNull(),
  ticketsBooked: integer("tickets_booked").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});