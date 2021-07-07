import React, { useState, useEffect } from 'react';
import './Card.css';
import TinderCard from 'react-tinder-card';
import database from './../../firebase';

function Card() {

    const [people, setPeople] = useState([]);
    let [count, setCount] = useState(0);

    window.setTimeout(() => {
        const tinderCards = document.querySelectorAll(".swipe");
        const tinderCardsContainer = document.querySelector(".tinderCards__cardContainer");
        
        setCount(() => {
            count = tinderCards.length;
        });

        if (!tinderCardsContainer.classList.contains("addBoxShadow")) {
            tinderCardsContainer.classList.add("addBoxShadow");
        }
    }, 500);

    useEffect(() => {
        // Using Cloud Firestore
        const unsubscribe = database.collection('tinder-users').onSnapshot((snapshot) => {
                setPeople(snapshot.docs.map(doc => doc.data()));
            });

        return () => {
            unsubscribe();
        };

        /* Using Heroku application
        [ADD THIS IN IMPORTS] import axios from './../../axios';
        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }

        fetchData();
        */
    }, []);

    const swiped = (direction, nameToDelete) => {
        const tinderCardsContainer = document.querySelector(".tinderCards__cardContainer");
        if (count === 1) {
            if (tinderCardsContainer.classList.contains("addBoxShadow")) {
                tinderCardsContainer.classList.remove('addBoxShadow');
                tinderCardsContainer.classList.add('removeBoxShadow');
            }
        } else {
            if (tinderCardsContainer.classList.contains("removeBoxShadow")) {
                tinderCardsContainer.classList.remove('removeBoxShadow');
                tinderCardsContainer.classList.add('addBoxShadow');
            }
        }
        console.debug("swiped " + direction + " on " + nameToDelete);
    };

    const outOfFrame = (name) => {
        setCount(() => {
            count -= 1;
        });
        console.debug("removed " + name);
    };

    return (
        <div className="tinderCards">
            <div className={"tinderCards__cardContainer"}>
                {people.map((person) => {
                    return <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                                <div style={{backgroundImage: `url(${person.imageUrl})`}} className="card">
                                    <h3>{person.name},&nbsp;{person.age}</h3>
                                </div>
                            </TinderCard>
                })}
            </div>
        </div>
    )
}

export default Card
