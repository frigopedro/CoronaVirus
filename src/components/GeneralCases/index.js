import React, { Component } from 'react';
import './styles.css';
class GeneralCases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TotalConfirmed: null,
            TotalDeaths: null,
            TotalRecovered: null
        }
    }
    async componentDidMount() {
        const url = 'https://api.covid19api.com/world/total';
        const response = await fetch(url);
        const state = await response.json();
        this.setState({ TotalConfirmed: state.TotalConfirmed })
        this.setState({ TotalDeaths: state.TotalDeaths })
        this.setState({ TotalRecovered: state.TotalRecovered })
    }
    render() {
        return (
            <section id='world' className="containerCases">

            <h1>Mundo</h1>
                <div>
 
                    <h2>Casos Confirmados <span className='casesConfirmed'>{this.state.TotalConfirmed}</span></h2>
                    
                    
                </div>

                <div>
                <hr/>
                    <h2>Mortes Confirmadas <span className='totalDeaths'>{this.state.TotalDeaths}</span></h2>
                
                </div>
                <div>
                <hr/>
                    <h2>Pessoas Recuperadas <span className ='totalRecovered'>{this.state.TotalRecovered}</span></h2>
                    
                </div>
            </section>
        );
    }
}

export default GeneralCases;

