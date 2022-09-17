import React,{useState} from 'react'
import { Link } from "react-router-dom"

export default function Board() {
    const [state, setState] = useState(0);
    function Profiles(){
        if (state === 0){
            return (<div id="profile">
            {Item()} {Item3()}{Item2()}
        </div>)
        }
        else if (state === 1){
            return (<div id="profile">
            {Item3()} {Item4()}{Item5()}
        </div>)
        }
        else {
            return (<div id="profile">
            {Item2()} {Item4()}{Item3()}
        </div>)
        }
    }
    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>

            <div className="duration">
                <button data-id='7' onClick={()=>setState(2)}>7 Days</button>
                <button data-id='30'onClick={()=>setState(1)}>30 Days</button>
                <button data-id='0'onClick={()=>setState(0)}>All-Time</button>

            </div>

            <Profiles></Profiles>
        </div>
    )
}


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
                <span>135</span>
            </div>
        </div>
    )
}

function Item3(data) {
    return (
        <div className="flex">
            <div className="item" >
                <img src="https://ipsf.net/wp-content/uploads/2021/12/Sebastian-Alexis-landscape-400x400.jpg" alt="" />

                <div className="info">
                    <h3 className='name text-dark'>Sanjay Heru</h3>
                    <span>Reston, Virginia</span>
                </div>
            </div>
            <div className="item">
                <span>98</span>
            </div>
        </div>
    )
}


function Item4(data) {
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
                <span>135</span>
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
                    <span>Reston, Virginia</span>
                </div>
            </div>
            <div className="item">
                <span>98</span>
            </div>
        </div>
    )
}
