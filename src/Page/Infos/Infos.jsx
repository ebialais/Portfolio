import React, { Component } from 'react';
import items from '../../Data/Items';
import './Infos.css';

export default class InfosWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            elem: {}
        }
    }
    componentWillMount(){
        let idElem = parseInt(this.props.match.params.id)
        let el = items.find(item => item.id === idElem)
        console.log(el)
        console.log(idElem)
        this.setState({elem: el})
    }
    render(){
        return (
            this.state.elem.id === 111 ? 
            <div id="containerContact" className="containerInfos">
                <h2 id="h2Infos">
                    {this.state.elem.title}
                </h2>
                <div id="contentContainerContact">
                    {this.state.elem.text}
                </div>
            </div>
            : 
            <div id="containerPerso" className="containerInfos">
                <h2 id="h2Infos">
                    {this.state.elem.title}
                </h2>
                <div id="contentContainerInfos">
                    {this.state.elem.text}
                    <img src={this.state.elem.imgs} id="imgInfos" alt="Ma photo"/>
                </div>
            </div>
        )
    }
}