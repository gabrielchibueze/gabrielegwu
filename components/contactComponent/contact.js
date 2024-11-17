"use client";
import theme from "@/app/MUITheme";
import classes from "./contact.module.css";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import {
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CtaButton from "../buttons/ctabuttonlink";
import { submitContactForm } from "@/lib/submitContactForm";
import { GrStatusGood } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
const servicesOffered = [
  "Escape Room",
  "Free Roam",
  "Treadmill Gaming",
  "Birthday Party",
  "Youth Group",
  "Education Outing",
  "Business Outing",
  "Single Player",
  "Team Bonding",
  "All of the above",
  "Other",
];

export default function ConatactComponent({ message }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    consent: "",
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
        subject: "",
        consent: "",
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
        <dialog className="dialog">
          <div
            className="alertBox "
            style={{
              maxWidth: "500px",
              display: "flex",
              margin: "0 1rem",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
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
                design="flat"
                action={acceptConfirmation}
                type="button"
              >
                Ok
              </CtaButton>
            </div>
          </div>
        </dialog>
      )}
      <section>
        <div className={classes.contactForm}>
          <Box>
            <div className={classes.formFileds}>
              <h1>Get In Touch</h1>
              <form action={formAction}>
                <div className={classes.topFormInput}>
                  <main>
                    <label htmlFor="name">Name</label>
                    <TextField
                      placeholder="Name"
                      id="name"
                      name="name"
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      // margin="normal"
                      required
                    />
                  </main>
                  <main>
                    <label htmlFor="phone">Phone Number (optional)</label>
                    <TextField
                      placeholder="Phone Number"
                      id="phone"
                      name="phone"
                      fullWidth
                      value={formData.phone}
                      onChange={handleChange}
                      // margin="normal"
                    />
                  </main>
                </div>
                <div className={classes.topFormInput}>
                  <main>
                    <label htmlFor="email">Email</label>
                    <TextField
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      // margin="normal"
                      required
                    />
                  </main>

                  {/* Drop-down for selecting a subject */}
                  <main>
                    <label htmlFor="suject-label">Subject</label>
                    <FormControl
                      fullWidth
                      // margin="normal"
                      placeholder="Select a subject"
                      required
                    >
                      <Select
                        labelId="subject-label"
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
                </div>

                {/* Message Text Area */}
                <main>
                  <label htmlFor="message">Message</label>

                  <TextField
                    placeholder="Message"
                    id="message"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    // margin="normal"
                    required
                  />
                </main>
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
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/terms-of-use"
                        style={{ textDecoration: "underline" }}
                      >
                        Policies and Terms of Use
                      </a>
                      .
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
                    <h3 style={{ margin: "0.3rem 0rem" }}>SUBMIT</h3>
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
        </div>
      </section>
    </ThemeProvider>
  );
}
