import './Chats.css';
import ChatTemplate from '../ChatTemplate/ChatTemplate';
import React from 'react'

function Chats() {
    return (
        <div className="chats">
            <ChatTemplate name="Seth Rogen" message="Yo, what's good?" timestamp="40s ago" pfp="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2Ri7GVIMa5dRQhbGJFx9xksgXfa_DYjxNUxP9COVxXTSLr2el"/>
            <ChatTemplate name="Charlize Theron" message="Hey 👋" timestamp="1m ago" pfp="https://wwd.com/wp-content/uploads/2020/09/diorchinup_theroncharlize_stills_13_v3.jpg.jpg"/>
            <ChatTemplate name="Dwayne 'The Rock' Johnson" message="That's hilarious lol" timestamp="2d ago" pfp="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3bdb2575-9a92-42f8-8472-bb78c7bd118a_720x405.jpeg"/>
            <ChatTemplate name="Nicole Kidman" message="Hi 🙏" timestamp="now" pfp="https://cdn.britannica.com/54/144454-050-C9A7EA7B/Nicole-Kidman.jpg"/>
            <ChatTemplate name="Cameron Diaz" message="Holy smokes! That's the best line pickup line ever 🤣" timestamp="now" pfp="https://img.cinemablend.com/filter:scale/quill/a/6/c/3/9/b/a6c39b5e54e3a3b790eea52f5da6d8b99e060e6b.jpg"/>
        </div>
    )
}

export default Chats;
