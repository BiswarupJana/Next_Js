import Image from "next/image"
import Link from "next/link";
import { getStarship } from "@/lib/apiCollection";
import classes from './page.module.css';
import { notFound } from "next/navigation";
import ship from '@/assets/starship.jpg'
export default async function PeopleDetailsPage({params}){
    const starship = await getStarship(params.starshipSlug);
    if(!starship){
        notFound();
    }

    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={ship} fill />
            </div>
            <div className={classes.headerText}>
                <h1>{starship.name}</h1>
                <p className={classes.creator}>
                         <a href=''>{starship.model}</a>
                </p>
                <p className={classes.summary}>{`Max atm Speed : ${starship.max_atmosphering_speed}`}</p>
                <p className={classes.summary}>{`Manufacture : ${starship.manufacturer}`}</p>
                <p className={classes.summary}>{`Cost : ${starship.cost_in_credits}`}</p>
                <p className={classes.summary}>{`Cargo Capacity : ${starship.cargo_capacity}`}</p>
                <p className={classes.summary}>{`Passenger Capacity : ${starship.passengers}`}</p>
                <p className={classes.summary}>{`Crew : ${starship.crew}`}</p>
                <p className={classes.summary}>{`Consumables : ${starship.consumables}`}</p>
                <p className={classes.summary}>{`Class : ${starship.starship_class}`}</p>
                
                
            </div>
        </header>
        <main>
             <div className={classes.instructions} >
            <h2> Films:</h2>
                {starship.films?.map((item,index)=>
                <div key={index}>
                    <Link href='/starships' >{item}</Link>
                </div>
                )}
            </div>
           
           
           
            
        </main>
        
        </>
    )
}