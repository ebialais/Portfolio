import React, { Component } from 'react';
import travaux from '../../Data/Travaux';
import './InfosWork.css';

export default class InfosWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            elem: {}
        }
    }
    componentWillMount(){
        let idElem = parseInt(this.props.match.params.id)
        let el = travaux.find(travail => travail.id === idElem)
        console.log(el)
        console.log(idElem)
        this.setState({elem: el}, ()=>{console.log(this.state.elem)})
    }
    render(){
        const { elem } = this.state
        return (
            <div className="InfosWork">
                <h2 className="h2InfosWork">
                    {elem.title}
                </h2>
                <p className="pInfosWork">
                    {elem.text}
                </p>
                <img src={elem.imgs} className="imgInfosWork" />
                <div className="linkInfosWork">
                    <a href={elem.srcGithub} target="_blank"><i className="fab fa-github faLinkInfosWork"></i></a>
                    <a href={elem.srcProjet} target="_blank"><i className="fas fa-eye faLinkInfosWork"></i></a>
                </div>
            </div>
        )
    }
}