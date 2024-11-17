"use client";
import Link from "next/link";
import classes from "./ctabutton.module.css";
import { useFormStatus } from "react-dom";

export default function CtaButton({
  type,
  action,
  design,
  children,
  disabled,
  loading,
  target,
  width,
}) {
  const { pending } = useFormStatus();

  return (
    <div className={classes.cta}>
      {type === "link" && (
        <Link
          style={{ width: width, textAlign: "center" }}
          href={action}
          target={target ? target : "_self"} // Default to "_self" if no target is provided
          rel={target === "_blank" ? "noopener noreferrer" : undefined} // Security enhancement
          className={`${classes[`${design}`]}`}
        >
          {pending ? loading : children}
        </Link>
      )}
      {type === "button" && (
        <button
          onClick={action}
          disabled={disabled || pending}
          className={`${classes[`${design}`]}`}
          style={{ width: width, textAlign: "center" }}
        >
          {pending ? loading : children}
        </button>
      )}
    </div>
  );
}
