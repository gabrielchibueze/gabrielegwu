import classes from "./loading.module.css";
export default function Loading({ message }) {
  return (
    <div className={classes.loading}>
      <p>{message || "Loading..."}</p>
    </div>
  );
}
