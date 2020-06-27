import React from "react";

import {register} from './UserFunction'

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            password:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };

        register(user).then(res => {

                this.props.history.push(`/login`)
        })
    }

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form action="" noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight-normal' style={{fontFamily:'Georgia,serif'}}>Enregistrez-vous</h1>
                            <div className='form-group'>
                                <label htmlFor='first_name' style={{fontFamily:'serif'}}>Nom</label>
                                <input className='form-control'
                                       type='text'
                                       name='first_name'
                                       placeholder='Nom'
                                       value={this.state.first_name}
                                       onChange={this.onChange
                                       }/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='last_name'style={{fontFamily:'serif'}}>Prenom</label>
                                <input className='form-control'
                                       type='text'
                                       name='last_name'
                                       placeholder='Prenom'
                                       value={this.state.last_name}
                                       onChange={this.onChange
                                       }/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email' style={{fontFamily:'serif'}}>Email</label>
                                <input className='form-control'
                                       type='email'
                                       name='email'
                                       placeholder='Entrer email'
                                       value={this.state.email}
                                       onChange={this.onChange
                                       }/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password' style={{fontFamily:'serif'}}>Mot de Passe</label>
                                <input className='form-control'
                                       type='password'
                                       name='password'
                                       placeholder='Entrer mot de passe'
                                       value={this.state.password}
                                       onChange={this.onChange
                                       }/>
                            </div>
                            <button className='btn btn-lg btn-primary btn-block'
                                    type='submit'
                            >
                                S'enregistrer
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }

}


export default Register