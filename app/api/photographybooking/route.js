// // app/api/register/route.js
// import { connectToDb } from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// let dbName = "comradephotography";

// export async function POST(request) {
//   try {
//     const db = await connectToDb(dbName);

//     const body = await request.json();
//     const {
//       name,
//       phone,
//       email,
//       company,
//       address,
//       country,
//       subject,
//       service,
//       message,
//       consent,
//     } = body;

//     const randNum = Math.floor(Math.random() * 100);
//     const id = `comradephoto-#${Date.now()}${randNum}`;

//     // Insert form data into MongoDB
//     const result = await db.collection("bookings").insertOne({
//       id,
//       name,
//       phone,
//       email,
//       company,
//       address,
//       country,
//       subject,
//       service,
//       consent,
//       message,
//       createdAt: new Date(),
//     });

//     return NextResponse.json({
//       message:
//         "Thank you for enquiring about our photography/videography services. We will get back to you shortly.",
//       data: result,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "There was an error sending your request, please try again",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request) {
//   try {
//     const db = await connectToDb(dbName);
//     const enquiriesCollection = await db
//       .collection("bookings")
//       .find({})
//       .toArray();

//     // Check for empty results and return accordingly
//     if (!enquiriesCollection || enquiriesCollection.length === 0) {
//       return NextResponse.json({
//         data: [],
//         message: "There are no photography bookings.",
//         status: 200,
//       });
//     }

//     // Return successful response with data
//     return NextResponse.json({
//       data: enquiriesCollection,
//       status: 200,
//     });
//   } catch (error) {
//     // Log detailed error for debugging
//     console.error("Error fetching bookings:", error);

//     return NextResponse.json({
//       message: "An error occurred fetching bookings",
//       status: 500,
//     });
//   }
// }
