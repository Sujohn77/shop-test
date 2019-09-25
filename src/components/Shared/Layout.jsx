import React from "react"
import HeaderContainer from "../Header/HeaderContainer";
import "./Layout.css"

export const Layout = (props) => {
    return (<div>
            <HeaderContainer/>
            <div className="main__content">
                {props.children}
            </div>
        </div>
    )
}
