import Image from "next/image"
import Link from "next/link";
import { getPlanet } from "@/lib/apiCollection";
import classes from './page.module.css';
import { notFound } from "next/navigation";
import img from '@/assets/planet1.jpg';
export default async function PlanetDetailsPage({params}){
    const planet = await getPlanet(params.planetSlug);
    if(!planet){
        notFound();
    }

    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={img} fill />
            </div>
            <div className={classes.headerText}>
                <h1>{planet.name}</h1>
                <p className={classes.creator}>
                         <a href=''>Population: {planet.population}</a>
                </p>
                <p className={classes.summary}>{`Climate: ${planet.climate}`}</p>
                <p className={classes.summary}>{`Diameter: ${planet.diameter}`}</p>
                <p className={classes.summary}>{`Orbit Period: ${planet.orbital_period}`}</p>
                <p className={classes.summary}>{`Rotation Period: ${planet.rotation_period}`}</p>
                <p className={classes.summary}>{`Water Surface: ${planet.surface_water}`}</p>
                <p className={classes.summary}>{`Terrain: ${planet.terrain}`}</p>
       
                
            </div>
        </header>
        <main>
            <div className={classes.instructions} >
            <h2> Films:</h2>
                {planet.films?.map((item,index)=>
                <div key={index}>
                    <Link href='/planets' >{item}</Link>
                </div>
                )}
            </div>
           
          
        </main>
        
        </>
    )
}