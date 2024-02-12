import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Peoples from "@/components/peoples/peoples";

export default function PeoplesPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* <Suspense
          fallback={<p className={classes.loading}>Fetching Data...</p>}
        >
          
        </Suspense> */}
        <Peoples />
      </main>
    </>
  );
}
