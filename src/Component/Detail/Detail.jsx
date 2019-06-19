import React, { Component } from 'react';
import './Detail.css'

export default class Detail extends Component {
    render (){
        const {title, logo } = this.props
        return (
            <div id="detail" 
                // style={{backgroundColor: this.props.color}}
            >
                <h3>
                    {title}
                </h3>
                <img src={logo} id="logo"/>
            </div>
        )
    }
}