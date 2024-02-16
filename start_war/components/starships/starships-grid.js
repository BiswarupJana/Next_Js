import classes from './starships-grid.module.css'
import StarshipCart from './starshipCart'
export default function StarshipsGrid({starships}){
    return <ul className={classes.ships}>
        {starships?.map((starship,index) => <li key={index}><StarshipCart {...starship}/></li>)}
    </ul>
}