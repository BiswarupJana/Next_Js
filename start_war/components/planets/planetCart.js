import Link from 'next/link';
import classes from './planetCart.module.css';



export default function PlanetCart({name,population, diameter,films, climate,url }) {
  const id = url.split('/').filter(Boolean).pop();
  
  return (
    <article className={classes.planets}>
      <header>
       
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>Population: {population}</p>
          <p>Diameter: {diameter}</p>
          <p>Films:{films.length}</p>
          <p>Climate:{climate}</p>
          
        </div>
      </header>
      <div className={classes.content}>
        {/* <p className={classes.summary}>{summary}</p> */}
        <div className={classes.actions}>
          <Link href={`/planets/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}