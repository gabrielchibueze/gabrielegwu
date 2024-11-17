// // app/api/register/route.js
// import clientPromise, { connectToDb } from "@/lib/mongodb";

// import { NextResponse } from "next/server";
// const dbName = "cosengwebsiteregistrations";
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
//       service,
//       message,
//       consent,
//       type,
//       program,
//       category,
//       price,
//       description,
//       duration,
//       collection,
//     } = body;
//     const randNum = Math.floor(Math.random() * 100);
//     const id = `${body?.type || "Coseng"}-#${Date.now()}${randNum}`;
//     // Insert form data into MongoDB
//     const result = await db.collection(collection).insertOne({
//       id,
//       name,
//       phone,
//       email,
//       company,
//       address,
//       country,
//       message,
//       consent,
//       type,
//       category,
//       program,
//       service,
//       price,
//       description,
//       duration,
//       collection,
//       createdAt: new Date(),
//     });
//     let messagResponse;
//     if (category === "service") {
//       messagResponse =
//         "Thank for your submission. A member of our team will be in touch with the next steps";
//     }
//     if (category === "training") {
//       messagResponse = `You have successfully enrolled for our ${program}. An email has been sent to you to confirm your enrollment.  A member of our team will be in touch with the next steps`;
//     }
//     return NextResponse.json({
//       message: messagResponse,
//       data: result,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "There was an error sending your enquiry, please try again",
//         error: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }
// export async function GET(request) {
//   try {
//     const db = await connectToDb("cosengwebsiteregistrations");
//     const collections = await db.listCollections().toArray();

//     let allCollections = [];
//     for (const collection of collections) {
//       const collectionName = collection.name;
//       const collectionData = await db
//         .collection(collectionName)
//         .find({})
//         .toArray();
//       allCollections.push(...collectionData);
//     }
//     if (allCollections.length <= 0) {
//       return NextResponse.json({ message: "No Data Available", status: 200 });
//     }
//     return NextResponse.json({ data: allCollections, status: 200 });
//   } catch (error) {
//     return NextResponse.json({
//       message: "Failed to fetch Data from Database",
//       status: "500",
//     });
//   }
// }

// // message: `You have successfully ${
// //     category === "training" ? "enrolled" : "registered/requested"
// //   } for our ${program} ${
// //     category === "service" ? `- ${service} Services` : ""
// //   }. An email has been sent to you to confirm your ${
// //     category === "training" ? "enrollment with us" : "request"
// //   }  along with further instructions.`,
