import Link from 'next/link';
import Image from 'next/image';

import classes from './starshipCart.module.css';



export default function StarshipCart({name,model, max_atmosphering_speed, starship_class,manufacturer,films,url }) {
  const id = url.split('/').filter(Boolean).pop();
  
  return (
    <article className={classes.ships}>
      <header>
       
        <div className={classes.headerText}>
          <h2>{name}</h2>
          <p>Model: {model}</p>
          <p>Max atm Speed: {max_atmosphering_speed}</p>
          <p>Class:{starship_class}</p>
          <p>Films:{films.length}</p>
          <p>Manufacturer:{manufacturer}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{` `}</p>
        <div className={classes.actions}>
          <Link href={`/starships/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}