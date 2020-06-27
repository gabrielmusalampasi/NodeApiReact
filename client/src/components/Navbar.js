import React from "react";

import {Link, withRouter} from 'react-router-dom';


class Navbar extends React.Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`)
    }

    render() {
        const loginReglink = (
            <ul className='navbar-nav'>

                <li className='nav-item'>
                    <Link to='/' className='nav-link' style={{fontFamily:'serif', marginRight:500}}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-link' style={{fontFamily:'serif'}}>
                        Se connecter
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/register' className='nav-link' style={{fontFamily:'serif'}}>
                        Enregistrez-vous
                    </Link>
                </li>
            </ul>
        );

        const userlink = (
            <ul className='navbar-nav'>
                <li className='nav-item' style={{marginLeft: 900 }}>
                    <a href='' onClick={this.logOut.bind(this)} className='nav-link' style={{fontFamily:'serif', color:'red'}}>
                        Deconnexion
                    </a>
                </li>
            </ul>
        );

        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark rounded'>
                <button
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbar1'
                    aria-controls='navbar1'
                    aria-expanded='false'
                    aria-label='Toggle-navigation'
                >
                </button>

                <div className='collapse navbar-collapse justify-content-md-center' id='navbar1'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'></Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userlink : loginReglink}
                </div>
            </nav>
        )

    };

}

export default withRouter(Navbar);