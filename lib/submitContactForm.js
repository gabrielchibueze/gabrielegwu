"use server";

export async function submitContactForm(prevState, formData) {
  const contactForm = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    subject: formData.get("subject"),
    category: formData.get("category"),
    address: formData.get("address"),
    consent: formData.get("consent"),
    country: formData.get("country"),
    message: formData.get("message"),
  };
  try {
    const response = await fetch(
      `https://gabrielegwu.vercel.app/api/enquiries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      }
    );
    const result = await response.json();
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
