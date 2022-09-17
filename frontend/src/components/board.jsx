import React from 'react'
import { Link } from "react-router-dom"
import Profiles from './profiles'

export default function Board() {

    const handleClick7 = (e) => {
        console.log(e.target);
        window.location.href = window.location.href + '/profiles30';
    }
    const handleClick30 = (e) => {
        console.log(e.target);
        navigate('/profiles30');
    }
    const handleClickALL = (e) => {
        console.log(e.target);
        navigate('/profilesALL');
    }

    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>

            <div className="duration">
                <button data-id='7'>7 Days</button>
                <button data-id='30'>30 Days</button>
                <button data-id='0'>All-Time</button>

            </div>

            <Profiles></Profiles>
        </div>
    )
}