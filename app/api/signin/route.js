// // app/api/register/route.js
// import { connectToDb } from "@/lib/mongodb";
// import bcryptjs from "bcryptjs";
// import { NextResponse } from "next/server";

// const dbName = "cosengwebsite";

// export async function POST(request) {
//   try {
//     const { password, email, loginid } = await request.json();
//     // console.log("Email:", email); // Debug log
//     const decyrpt = await bcryptjs.hash("Coseng#2024@Website", 10);
//     // console.log(decyrpt);
//     const db = await connectToDb(dbName);
//     const userAdmin = await db.collection("admin").findOne({ loginid, email });

//     if (!userAdmin) {
//       return NextResponse.json({
//         data: {},
//         message: "User not found. Please check login details.",
//         status: 404,
//       });
//     }

//     const isPasswordMatch = await bcryptjs.compare(
//       password,
//       userAdmin.password
//     );

//     if (!isPasswordMatch) {
//       return NextResponse.json({
//         data: {},
//         message: "Incorrect password. Please try again.",
//         status: 401,
//       });
//     }

//     // Successful login response
//     return NextResponse.json({
//       data: {
//         name: userAdmin.name,
//         email: userAdmin.email,
//         id: userAdmin.loginid,
//       },
//       message: "Login successful",
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       message: "An error occurred while processing the login request.",
//       status: 500,
//     });
//   }
// }
