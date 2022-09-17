import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { getDemoStudentScore } from "./init-firebase.jsx";


export default function Board() {
    const [state, setState] = useState(0);
    function Profiles() {
        if (state === 0) { // All Time
            return (<div id="profile">
                {Item()} {Item7()}{Item6()}
            </div>)
        }
        else if (state === 1) { // 30
            return (<div id="profile">
                {Item()} {Item4()}{Item5()}
            </div>)
        }
        else {
            return (<div id="profile">
                {Item()} {Item2()}{Item3()}
            </div>)
        }
    }
    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>

            <div className="duration">
                <button data-id='7' onClick={() => setState(2)}>7 Days</button>
                <button data-id='30' onClick={() => setState(1)}>30 Days</button>
                <button data-id='0' onClick={() => setState(0)}>All-Time</button>

            </div>

            <Profiles></Profiles>
        </div>
    )
}

var demoScore = getDemoStudentScore();
function Item(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://pbs.twimg.com/profile_images/1484345356557041666/b0ntme74_400x400.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Ryan Reynolds</h3>
                    <span>Los Angeles, California</span>
                </div>
            </div>
            <div className="item">
                <span>172</span>
            </div>
        </div>
    )
}

function Item2(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://i.pinimg.com/474x/b9/37/6e/b9376e7d2175a59d1d44b7fcf4442f26.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Jerome White</h3>
                    <span>New York City, New York</span>
                </div>
            </div>
            <div className="item">
                <span>166</span>
            </div>
        </div>
    )
}

function Item3(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://www.paramountanz.com.au/wp-content/uploads/2020/09/spongebob-squarepants-400x400-1.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Darrin Soes</h3>
                    <span>Boston, Connecticut</span>
                </div>
            </div>
            <div className="item">
                <span>101</span>
            </div>
        </div>
    )
}


function Item4(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://i.pinimg.com/originals/b8/28/6b/b8286b8c5177ad8ed665be524730f860.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Olivia Shawsy</h3>
                    <span>Atlanta, Georgia</span>
                </div>
            </div>
            <div className="item">
                <span>128</span>
            </div>
        </div>
    )
}

function Item5(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://ipsf.net/wp-content/uploads/2021/12/Sebastian-Alexis-landscape-400x400.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Sanjay Heru</h3>
                    <span>Orlando, Florida</span>
                </div>
            </div>
            <div className="item">
                <span>71</span>
            </div>
        </div>
    )
}

function Item6(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://www.denofgeek.com/wp-content/uploads/2019/11/ironman3_2.jpg?resize=400%2C400" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Tony Stank</h3>
                    <span>Malibu, California</span>
                </div>
            </div>
            <div className="item">
                <span>98</span>
            </div>
        </div>
    )
}

function Item7(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://www.prime1studio.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/m/m/mmww-02_thumb.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Carly Shay</h3>
                    <span>Reston, Virginia</span>
                </div>
            </div>
            <div className="item">
                <span>154</span>
            </div>
        </div>
    )
}
