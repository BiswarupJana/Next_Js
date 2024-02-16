import classes from "./movieCart.module.css";
import Link from "next/link";

export default function MovieCart({
  title,
  director,
  producer,
  release_date,
  url,
}) {
  const id = url.split("/").filter(Boolean).pop();

  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>Release Data: {release_date}</p>
          <p>Director: {director}</p>
          <p>
            Producer:{producer}</p>
            
        </div>
      </header>
      <div className={classes.content}>
        {/* <p className={classes.summary}>{`Summary`}</p> */}
        <div className={classes.actions}>
          <Link href={`/movies/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
