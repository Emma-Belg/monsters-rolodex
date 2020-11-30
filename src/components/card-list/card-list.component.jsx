import React from 'react';
//import {Card} from "../card/card.component";
import './card-list.style.css'

export const CardList = (props) => {
    return(
        <div className="card-list">
            {
                props.monsters.map((monster) => {
                    //each child in a list needs a unique key prop, bc React needs to know
                    //which element to update if it needs to update an element in the list
                    return <h1 key={monster.id}>{monster.name}</h1>
                })
            }
        </div>
    )
}