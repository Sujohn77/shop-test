import React from 'react';
import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import cartImg from "./cart.png";

export const Header = ({cartCounter}) => {
    return <header>
        <div className="header__container">
            <div className="header__centered">

                <h2><Link to={"/market"}>Market</Link></h2>

                <div className="basket__block">
                    <NavLink to="cart"><img src={cartImg} alt=""/></NavLink>
                    <span>{cartCounter}</span>
                </div>

            </div>
        </div>
    </header>
};
