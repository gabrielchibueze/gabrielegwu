"use server";

import { revalidatePath } from "next/cache";

export async function submitProgramEnrollForm(prevState, formData) {
  const enrollForm = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    service: formData.service,
    address: formData.address,
    country: formData.country,
    message: formData.message,
    consent: formData.consent,
    type: formData.type,
    program: formData.program,
    category: formData.category,
    price: formData.price,
    description: formData.description,
    duration: formData.duration,
    collection: formData.collection,
  };
  try {
    const response = await fetch(`http://localhost:3000/api/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollForm),
    });
    const result = await response.json();
    revalidatePath("/services", "layout");
    if (result.data.acknowledged) {
      return {
        status: "successful",
        message: result.message,
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: "Sorry!! There was an error sending your request. Try again",
    };
  }
}
