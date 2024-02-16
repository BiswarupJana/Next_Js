
import classes from './movies-grid.module.css'
import MovieCart from './movieCart'
export default function MoviesGrid({movies}){
    return <ul className={classes.meals}>
        {movies?.map((movie,index) => <li key={index}><MovieCart {...movie}/></li>)}
    </ul>
}