import React, { useState, useEffect } from 'react';
import './Card.css';
import TinderCard from 'react-tinder-card';
import axios from './../../axios';

function Card() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.debug("swiped " + direction + " on " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.debug("removed " + name);
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
                                    <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                                        <h3>{person.name},&nbsp;{person.age}</h3>
                                    </div>
                                </TinderCard>
                })}
            </div>
        </div>
    )
}

export default Card
