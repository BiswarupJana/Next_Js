
import classes from './planets-grid.module.css'

import PlanetCart from './planetCart'
export default function PlanetsGrid({planets}){
    return <ul className={classes.planets}>
        {planets?.map((planet,index) => <li key={index}><PlanetCart {...planet}/></li>)}
    </ul>
}