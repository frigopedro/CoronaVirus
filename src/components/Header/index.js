import React, { Component } from 'react';
import './styles.css'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <section className='Header'>
                <h1>Casos do Corona-Virus</h1>
                <h2>Developed by Pedro</h2>
            </section>
        );
    }
}
 
export default Header;