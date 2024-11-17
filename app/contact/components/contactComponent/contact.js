"use client";
import theme from "@/app/MUITheme";
import classes from "./contact.module.css";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { TextField, Box, MenuItem, Select, FormControl } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { submitContactForm } from "@/lib/submitContactForm";
import { GrStatusGood } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import Link from "next/link";
import CtaButton from "@/components/buttons/ctabuttonlink";

const servicesOffered = [
  "Frontend Development Collaboration",
  "Fullstack Developement Collaboration",
  "Backend Development Collaboration",
  "Project Management Services ",
  "Project Delivery Services",
  "Web Application Delivery Services",
  "Risk Management Services",
  "Stakeholder Management Services",
  "Let's Catch-up",
  "Other",
];

export default function ContactComponentForm({ message, heading, caption }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    country: "",
    subject: "",
    consent: "",
    category: false,
    message: "",
  });
  const [state, formAction] = useFormState(submitContactForm, {
    message: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (state.status === "successful") {
      setErrorMessage(state.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        country: "",
        category: "",
        company: "",
        subject: "",
        consent: false,
        message: "",
      });
    } else {
      setErrorMessage(state.message);
    }
  }, [state, state.status, state.message]);

  const handleChange = (e) => {
    const { name, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : e.target.value,
      };
    });
  };
  function acceptConfirmation() {
    setErrorMessage("");
  }
  return (
    <ThemeProvider theme={theme}>
      {errorMessage?.split("").length > 0 && (
        // state?.status === "successful" &&
        <dialog className="alertDailog">
          <div className="alertBox ">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {state?.status === "successful" ? (
                <h1 style={{ color: "green" }}>
                  <GrStatusGood />
                </h1>
              ) : (
                <h1 style={{ color: "red" }}>
                  <RiErrorWarningLine />
                </h1>
              )}
              <h3
                style={{
                  color: state?.status === "successful" ? "green" : "red",
                }}
              >
                {state?.status === "successful"
                  ? "Enquiry Sent!!"
                  : "An Error Occured"}
              </h3>
              <p>{errorMessage}</p>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <CtaButton
                design="plain"
                action={acceptConfirmation}
                type="button"
              >
                Ok
              </CtaButton>
            </div>
          </div>
        </dialog>
      )}
      <section className={classes.contactForm}>
        <Box>
          <div className={classes.formFileds}>
            <h1>
              {caption || "We are happy to get you started with our services"}
            </h1>

            <form action={formAction}>
              <div className={classes.topFormInput}>
                <main>
                  <label htmlFor="name">Name</label>
                  <TextField
                    name="name"
                    id="name"
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />{" "}
                </main>
                <main>
                  <label htmlFor="phone">Phone Number (optional)</label>

                  <TextField
                    name="phone"
                    id="phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </main>
              </div>
              <div className={classes.topFormInput}>
                <main>
                  <label htmlFor="email">Email</label>
                  <TextField
                    name="email"
                    id="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </main>
                <main>
                  <label htmlFor="company">Company Name (optional)</label>
                  <TextField
                    id="company"
                    name="company"
                    fullWidth
                    value={formData.company}
                    onChange={handleChange}
                  />
                </main>
              </div>

              {/* Drop-down for selecting a subject */}
              {/* <div className={classes.topFormInput}> */}
              <main>
                <label htmlFor="subject-label">Select a Subject</label>
                <FormControl fullWidth required>
                  <Select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    {servicesOffered.map((subject, index) => (
                      <MenuItem key={index} value={subject}>
                        {subject}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </main>
              {/* </div> */}
              <div className={classes.topFormInput}>
                <main>
                  <label htmlFor="address">Address (optional)</label>
                  <TextField
                    name="address"
                    id="address"
                    fullWidth
                    value={formData.address}
                    onChange={handleChange}
                  />
                </main>
                <main>
                  <label htmlFor="country">Country (optonal)</label>
                  <TextField
                    id="country"
                    name="country"
                    fullWidth
                    value={formData.country}
                    onChange={handleChange}
                  />
                </main>
              </div>

              {/* Message Text Area */}
              {/* <div className={classes.topFormInput}> */}
              <main>
                <label htmlFor="message">Message</label>
                <TextField
                  name="message"
                  id="message"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
              </main>
              {/* </div> */}
              <TextField
                label="Category"
                name="category"
                fullWidth
                value={formData.subject.split(" ").at(-1)}
                onChange={handleChange}
                margin="normal"
                sx={{ display: "none" }}
              />
              <div className="consentSection">
                <input
                  type="checkbox"
                  value={formData.consent}
                  onChange={handleChange}
                  name="consent"
                  id="consent"
                />
                <label htmlFor="consent" style={{ cursor: "pointer" }}>
                  <p>
                    By submitting this form, you agree to the{" "}
                    <Link
                      href="/terms-of-use"
                      style={{ textDecoration: "underline" }}
                    >
                      Policies and Terms of Use
                    </Link>{" "}
                    of this site.
                  </p>
                </label>
              </div>

              <div style={{ margin: "1rem 0" }}>
                <CtaButton
                  design="raised"
                  type="button"
                  width="100%"
                  loading="Submitting..."
                  disabled={!formData.consent}
                >
                  <span style={{ height: "5rem" }}>
                    {message || "Send Message"}
                  </span>
                </CtaButton>
              </div>
            </form>
            {errorMessage?.split("").length > 0 &&
              state?.status === "failed" && (
                <p
                  style={{
                    padding: "0.5rem 1rem",
                    marginBottom: "1rem",
                    backgroundColor: `${
                      state?.status === "failed" ? "#f2b5d4" : "#b7e4c7"
                    }`,
                    borderRadius: "0.5rem",
                    textAlign: "center",
                    border: "0.5px solid #grey",
                  }}
                >
                  {errorMessage}
                </p>
              )}
          </div>
        </Box>
      </section>
    </ThemeProvider>
  );
}
