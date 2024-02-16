import classes from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Peoples from "@/components/peoples/peoples";
import Starships from "@/components/starships/starships";

export default function StarShipPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        Star Wars galaxy in search of the most {" "}
          <span className={classes.highlight}>awesome ships.</span>
        </h1>
        
        <p className={classes.cta}>
          <Link href="/starships">~STAR SHIPS 🛬</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* <Suspense
          fallback={<p className={classes.loading}>Fetching Data...</p>}
        >
          
        </Suspense> */}
        <Starships />
      </main>
    </>
  );
}