import React from "react";
import {Line, Pie, Bar} from 'react-chartjs-2'

class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right',
        location:'City',
    };

    render() {

        const start_date='01/01/2020';
        const end_date='02/02/2020';
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Statistiques des ' + this.props.location+' '+ 'du' + ' ' + ' ' + `${start_date}`+' ' +  ' '+'au' +' '+ `${end_date}`,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                    }}
                />
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Statistiques des ' + this.props.location+' '+ 'du' + ' ' + ' ' + `${start_date}`+' ' +  ' '+'au' +' '+ `${end_date}`,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
                <Pie
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Statistiques des ' + this.props.location+' '+ 'du' + ' ' + ' ' + `${start_date}`+' ' +  ' '+'au' +' '+ `${end_date}`,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }

}

export default Chart