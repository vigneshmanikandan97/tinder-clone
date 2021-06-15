import React, { useState } from 'react';
import './Card.css';
import TinderCard from 'react-tinder-card';

function Card() {

    // static data for testing
    const [people, setPeople] = useState([
        {
            id: 1,
            name: "Elon Musk",
            age: 49,
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
        },
        {
            id: 2,
            name: "Jeff Bezos",
            age: 57,
            url: "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("swiped " + direction + " on " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log("removed " + name);
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => {
                    return <TinderCard
                                className="swipe"
                                key={person.name}
                                preventSwipe={['up', 'down']}
                                onSwipe={(dir) => swiped(dir, person.name)}
                                onCardLeftScreen={() => outOfFrame(person.name)}
                                >
                                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                                        <h3>{person.name},&nbsp;{person.age}</h3>
                                    </div>
                                </TinderCard>
                })}
            </div>
        </div>
    )
}

export default Card
