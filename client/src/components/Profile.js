import React from "react";
import jwt_decode from 'jwt-decode';
import Chart from "./Chart";

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            chartData:{}

        }

    };


    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        console.log('decode', decoded);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData(){
        //TODO AJAX CALL FROM API


        this.setState({
            chartData: {
                labels: ['Hommes', 'Femmes', 'Enfants','Couple','Famille','Anniversaire'],
                datasets:[
                    {
                        label:'Clients',
                        data:[
                            30,
                            50,
                            10,
                            60,
                            80,
                            5
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,99,132,0.6)'

                        ]


                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-4'>
                    <div className='col-sm-8 mx-auto'>
                        <h1 className='text-center' style={{fontFamily:'Georgia,serif'}}>PROFIL de {this.state.first_name} </h1>
                    </div>
                    <table className='table col-md-4 mx-auto' style={{fontFamily:'serif'}}>
                        <tbody>
                        <tr>
                            <td>Nom :</td>
                            <td>{this.state.first_name}</td>
                        </tr>
                        <tr>
                            <td>Prenom :</td>
                            <td>{this.state.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td>{this.state.email}</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <div className='jumbotron mt-5'>
                    <Chart chartData={this.state.chartData} location='Clients'/>
                </div>
            </div>


        )
    }

}

export default Profile