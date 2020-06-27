import React from "react";
import logo from '../logo.jpg'
import App from '../App.css'


class Landing extends React.Component {
    render(){
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm8 mx-auto'>
                        <h1 className='text-center'>
                            BIENVENU DANS VOTRE ESPACE COLLABORATEUR
                        </h1>
                    </div>
                </div>
                <div className='mt-2'>
                    <img src={logo} alt="logo" style={{width:500, height:300}}/>
                </div>
            </div>
        )
    }
}

export default Landing