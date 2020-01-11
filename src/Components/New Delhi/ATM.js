import React, { Component } from 'react'
import {VictoryPie,VictoryAxis,VictoryBar,VictoryChart,VictoryTheme} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class ATM extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:28,
            ATM1:3,
            ATM2:6,
            ATM3:8,
            ATM4:6,
            ATM5:5,
            UtilATM1:20,
            UtilATM2:50,
            UtilATM3:75,
            UtilATM4:60,
            UtilATM5:75,
        }
    }
    render() {
        const {Total,ATM1,ATM2,ATM3,ATM4,ATM5,ATM6,ATM7,ATM8,ATM9,ATM10,UtilATM1,UtilATM2,UtilATM3,UtilATM4,UtilATM5,UtilATM6,UtilATM7,UtilATM8,UtilATM9,UtilATM10}=this.state;
        const data1 = [
            {x: parseFloat(ATM1*100/Total).toFixed(2) , y: parseInt(ATM1),label:ATM1+"M"},
            {x: parseFloat(ATM2*100/Total).toFixed(2) , y: parseInt(ATM2),label:ATM2+"M"},
            {x: parseFloat(ATM3*100/Total).toFixed(2) , y: parseInt(ATM3),label:ATM3+"M"},
            {x: parseFloat(ATM4*100/Total).toFixed(2) , y: parseInt(ATM4),label:ATM4+"M"},
            {x: parseFloat(ATM5*100/Total).toFixed(2) , y: parseInt(ATM5),label:ATM5+"M"},
          ];
          const data2 = [
            {Utilization: parseFloat(UtilATM1*100/Total).toFixed(2) , ATM: parseInt(UtilATM1)},
            {Utilization: parseFloat(UtilATM2*100/Total).toFixed(2) , ATM: parseInt(UtilATM2)},
            {Utilization: parseFloat(UtilATM3*100/Total).toFixed(2) , ATM: parseInt(UtilATM3)},
            {Utilization: parseFloat(UtilATM4*100/Total).toFixed(2) , ATM: parseInt(UtilATM4)},
            {Utilization: parseFloat(UtilATM5*100/Total).toFixed(2) , ATM: parseInt(UtilATM5)},
          ];
        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the ATMs used at IGI Airport is as follows: 
                </p>
                <div className="fl w-60 pa3 f4">
                    <VictoryPie 
                        data={data1} 
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        colorScale={["#adb9db","#93a6db","#6e87cc","#5471bf","#3a5dba"]}
                        style={{ parent: { maxWidth: "100%" } }}
                        className=""
                        cornerRadius={({ datum }) => 5}
                        innerRadius={({ datum }) => 10}
                        padAngle={({ datum }) => 1}
                        endAngle={360}
                        startAngle={0}
                        width={400}
                    >
                    </VictoryPie>
                </div>
                <div className="fl w-30 pa3 Home-key shadow-2">
                    <p className="f3 b tc">Key</p>
                        <div className="flex flex-column">
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-one"></span>: ATM1
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-two"></span>: ATM2
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-three"></span>: ATM3
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-four"></span>: ATM4
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-five"></span>: ATM5
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <p className="f3 pa2 tc mb1">
                    Percentage Utilization of each ATMs at IGI Airport is as follows: 
                    </p>
                    </div>
                    <div className="fl w-70 pl3 tc">
                        <VictoryChart 
                            domainPadding={20} 
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    tickValues={[1,2,3,4,5]}
                                    tickFormat={["A1","A2","A3","A4","A5"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={(y) => (`$${y}%`)}
                                />
                                <VictoryBar
                                    data={data2}
                                    barWidth={({ index }) => 10}
                                    x="Utilization"
                                    y="ATM"
                                />
                            </VictoryChart>
                        </div>
            </div>
        )
    }
}

export default ATM
