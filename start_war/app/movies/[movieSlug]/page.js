import Image from "next/image"
import Link from "next/link";
import { getMovie } from "@/lib/apiCollection";
import classes from './page.module.css';
import { notFound } from "next/navigation";
import img from '@/assets/thumbnail4.jpg';
export default async function MovieDetailsPage({params}){
    const movie = await getMovie(params.movieSlug);
    if(!movie){
        notFound();
    }

    return (
        <>
        <header className={classes.header}>
        <div className={classes.image}>
                <Image src={img} fill />
            </div>
            <div className={classes.headerText}>
                <h1>{movie.title}</h1>
                <p className={classes.creator}>
                         Release Date:{' '}{movie.release_date} 
                </p>
                <p className={classes.summary}>{`Director: ${movie.director}`}</p>
                <p className={classes.summary}>{`Producer: ${movie.producer}`}</p>
                <p className={classes.summary}>{`Episode: ${movie.episode_id}`}</p>
                
                <p className={classes.instructions} >{`Opening Crawl: ${movie.opening_crawl}`}</p>
                
            </div>
        </header>
        <main>
            <div className={classes.instructions} >
            <h2> Characters:</h2>
                {movie.characters?.map((item,index)=>
                <div key={index}>
                    <Link href='/' >{item}</Link>
                </div>
                )}
            </div>
            <div className={classes.instructions} >
            <h2> Planets:</h2>
                {movie.planets?.map((item,index)=>
                <div key={index}>
                    <Link href='/' >{item}</Link>
                </div>
                )}
            </div>
           
            <div className={classes.instructions} >
                <h2>Vehicles</h2>
                {movie.vehicles?.map((item,index)=>
                <div key={index}>
                    <Link href='/' >{item}</Link>
                </div>
                )}
            </div>
            <div className={classes.instructions} >
               <h2>Starships:</h2>
               {movie.starships?.map((item,index)=>
               <div key={index}>
                   <Link href='/' >{item}</Link>
               </div>
               )}
           </div>
            <div className={classes.instructions} >
               <h2>Species:</h2>
               {movie.species?.map((item,index)=>
               <div key={index}>
                   <Link href='/' >{item}</Link>
               </div>
               )}
           </div>
           
            
        </main>
        
        </>
    )
}