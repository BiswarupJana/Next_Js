import classes from "./page.module.css";
import Link from "next/link";
import Planets from "@/components/planets/planets";

export default function PlanetsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        In the Star Wars Legends continuity, the galaxy was said to have {" "}
          <span className={classes.highlight}>3.2 billion</span>
        </h1>
        <p>
        habitable systems
        </p>
        <p className={classes.cta}>
          <Link href="/planets">Star Wars galaxy 🌏</Link>
        </p>
      </header>
      <main className={classes.main}>
     
        <Planets />
      </main>
    </>
  );
}