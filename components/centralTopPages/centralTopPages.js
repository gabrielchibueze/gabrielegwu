import classes from "./centralTopPages.module.css";
export default function CentralTopPages({ image, title }) {
  return (
    <main
      className={classes.topPages}
      style={{
        backgroundImage: `url(${image || "/images/aboutus/aboutus.jpg"})`,
      }}
    >
      <div className={classes.topPagesInner}>
        <h1>{title}</h1>
      </div>
    </main>
  );
}
