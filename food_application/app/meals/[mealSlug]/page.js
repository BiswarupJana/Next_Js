import Image from "next/image"
import { getMeal } from "@/lib/meals";
export default function MealDetailsPage({params}){
    getMeal();
    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image fill />
            </div>
            <div className={classes.headerText}>
                <h1>Title</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${'EMAIL'}`}>NAME</a>
                </p>
                <p className={classes.summary}>SUMMARY</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: '...',
            }}>

            </p>
        </main>
        </>
    )
}