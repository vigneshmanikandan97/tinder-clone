import React, { useState, useEffect } from 'react';
import './Card.css';

// react-tinder-card module
import TinderCard from 'react-tinder-card';

// Firestore DB
import database from './../../firebase';

// Snackbar imports
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Card() {

    const [people, setPeople] = useState([]);
    let [count, setCount] = useState(0);
    let [isSwipeUp, setSwipeUp] = useState(false);

    let tinderCards = '';
    let tinderCardsContainer = '';

    window.setTimeout(() => {
        tinderCards = document.querySelectorAll(".swipe");
        tinderCardsContainer = document.querySelector(".tinderCards__cardContainer");
        
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

        // Activate snackbar for swipe up
        if (direction === 'up') {
            setSwipeUp(isSwipeUp => isSwipeUp = true);
        } else {
            setSwipeUp((isSwipeUp) => {if (isSwipeUp) isSwipeUp = false; });
        }

        console.debug("swiped " + direction + " on " + nameToDelete);
    };

    const outOfFrame = (name) => {
        setCount(() => {
            count -= 1;
        });
        console.debug("removed " + name);
    };

    // Snackbar content
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSwipeUp(false);
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__container">
                <div className={"tinderCards__cardContainer"}>
                    {people.map((person) => {
                        return <TinderCard className="swipe" key={person.name} preventSwipe={['down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                                    <div style={{backgroundImage: `url(${person.imageUrl})`}} className="card">
                                        <h3>{person.name},&nbsp;{person.age}</h3>
                                    </div>
                                </TinderCard>
                    })}
                </div>
            </div>
            <div className={classes.root}>
                <Snackbar open={isSwipeUp} autoHideDuration={1700} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info">🌟 Super Swipe 🌟</Alert> 
                </Snackbar>
            </div>
        </div>
    )
}

export default Card
