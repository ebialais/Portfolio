import React, { Component } from 'react';
import travaux from '../../Data/Travaux';
import Detail from '../../Component/Detail/Detail';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './work.css';

export default class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: travaux,
            redirect: false,
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
    goBack = () => {
        console.log("go back")
        this.setState({ redirect: true })
    }
    render(){
        if(this.state.redirect){
            return <Redirect push to='/' />
        }
        return (
            <div id="work">
                <div id="wrapperWork">
                    { this.state.datas.map((data) => 
                        <Link to={`/InfosWork/${data.id}`} key={data.id}>
                            <Detail
                                title={data.title}
                                img={data.img}
                                color={data.color}
                                logo={data.logo}
                            />
                        </Link>
                    )}
                </div>
                <div id="buttonsWork">
                    <button onClick={this.goBack} className="buttonWorkPage">
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </button>
                    <button onClick={this.shuffle} className="buttonWorkPage">
                        <i className="fas fa-random"></i>
                    </button>
                </div>
            </div>
        )
    }
}