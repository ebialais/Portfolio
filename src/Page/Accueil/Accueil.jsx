import React, { Component } from 'react';
import { Link } from "react-router-dom";
import items from '../../Data/Items';
import Detail from '../../Component/Detail/Detail';
import './Accueil.css';


export default class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: items
        }
    }
    componentWillMount () {
        this.shuffle();
    }
    shuffle = () => {
        let newDatas = this.state.datas
        newDatas.sort(() => Math.random() - 0.5)
        this.setState({
            datas : newDatas
        })
    }
    render(){
        return(
            <div id="Accueil">
                <div id="wrapperAccueil">
                    { this.state.datas.map((data) => 
                        <Link to={`/Infos/${data.id}`} key={data.id}>
                            <Detail
                                title={data.title}
                                logo={data.logo}
                            />
                        </Link>
                    )}
                    <a href="/img/Emilie_Bialais_Resume.pdf" target="_blank">
                        <Detail
                            title="Mon CV"
                            logo="/img/logo/resume.svg"
                        />
                    </a>
                    <Link to="/Work">
                        <Detail
                            title="Mes Travaux"
                            logo="/img/logo/MyWork.svg"
                        />
                    </Link>
                </div>
                <button onClick={this.shuffle} className="shuffleButtonAccueil">
                    <i className="fas fa-random"></i>
                </button>
            </div>
        )
    }
}