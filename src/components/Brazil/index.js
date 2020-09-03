
import React, { Component } from 'react';
import './styles.css'
class Brazil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Confirmed: null,
            Deaths: null,
            Recovered: null
        }
    }

    async componentDidMount() {
        const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
        const response = await fetch(url);
        const state = await response.json();
        this.setState({ Confirmed: state.data.confirmed })
        this.setState({ Deaths: state.data.deaths });
        this.setState({ Recovered: state.data.recovered })
    }

    render() {
        return (
            <div>
                <section className="containerCases">
                    <h1 className='Brasil'>Brasil</h1>

                    <h2 className='CasesBrasil'>Total de Casos: <span className='confirmedC'>{this.state.Confirmed}</span></h2>
                    
                    <hr />
                    <h2 className='CasesBrasil'>Total de Mortos: <span className='deathsC'>{this.state.Deaths}</span></h2>
                    <hr />
                    <h2 className='CasesBrasil'>Pessoas Recuperadas: <span className='recoveredC'>{this.state.Recovered}</span></h2>

                </section>
            </div>
        );
    }
}

export default Brazil;