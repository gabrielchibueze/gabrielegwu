// app/api/register/route.js
import { connectToDb } from "@/lib/mongodb";

import { NextResponse } from "next/server";
const dbName = "gabrielegwuwebsite";
export async function POST(request) {
  try {
    const db = await connectToDb(dbName);
    const body = await request.json();
    const {
      name,
      phone,
      email,
      company,
      address,
      country,
      category,
      subject,
      message,
      consent,
    } = body;
    const randNum = Math.floor(Math.random() * 100);
    const id = `${body?.category || "GE"}-#${Date.now()}${randNum}`;
    // Insert form data into MongoDB
    const result = await db.collection("enquiries").insertOne({
      id,
      name,
      phone,
      email,
      company,
      address,
      country,
      category,
      subject,
      consent,
      message,
      createdAt: new Date(),
    });
    return NextResponse.json({
      message:
        "Thank you for reaching out to me. I will get back to you as soon as possible.",
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was an error sending your enquiry, please try again",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const db = await connectToDb(dbName);
    const enquiriesCollection = await db
      .collection("enquiries")
      .find({})
      .toArray();

    // Log response for debugging

    // Check for empty results and return accordingly
    if (!enquiriesCollection || enquiriesCollection.length === 0) {
      return NextResponse.json({
        data: [],
        message: "There are no enquiries.",
        status: 200,
      });
    }

    // Return successful response with data
    return NextResponse.json({
      data: enquiriesCollection,
      status: 200,
    });
  } catch (error) {
    // Log detailed error for debugging
    // console.error("Error fetching enquiries:", error);

    return NextResponse.json({
      message: "An error occurred fetching enquiries",
      status: 500,
    });
  }
}
