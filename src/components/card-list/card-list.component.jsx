import React from 'react';
import {Card} from "../card/card.component";
import './card-list.style.css'

export const CardList = (props) => {
    return(
        <div className="card-list">
            {
                props.monsters.map((monster) => (
                    //the monster={monster} is allowing the Card component to use monster via its props
                    <Card key={monster.id} monster={monster} />
                ))
            }
        </div>
    )
}