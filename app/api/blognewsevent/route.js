import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

const dbName = "cosengwebsite";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    if (!category) {
      return NextResponse.json({
        message: "Category parameter is missing",
        status: 400,
      });
    }
    const db = await connectToDb(dbName);
    const collection = await db
      .collection(category.toLowerCase())
      .find({})
      .toArray();

    if (collection.length === 0) {
      return NextResponse.json({
        message: `No records found in the ${category} collection`,
        status: 404,
      });
    }

    return NextResponse.json({
      data: collection,
      message: "Request successful",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was an error processing your request",
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const category = body.category ? body.category.toLowerCase() : "coseng";
    const randNum = Math.floor(Math.random() * 100);
    const id = `${
      category.slice(0, -1) || "Coseng"
    }Id-#${Date.now()}${randNum}`;

    const db = await connectToDb(dbName);
    const result = await db.collection(category).insertOne({
      id,
      ...body,
    });

    if (!result?.insertedId) {
      return NextResponse.json(
        { message: `Failed to create entry in` },
        { status: 500 }
      );
    }
    return new Response(JSON.stringify({ message: "success", status: 201 }), {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was an error processing your request",
      status: 500,
    });
  }
}
