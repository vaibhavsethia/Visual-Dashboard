/*eslint-disable*/
import React, { Component } from 'react'
import {VictoryPie,VictoryAxis,VictoryBar,VictoryChart,VictoryTheme,VictoryTooltip} from 'victory'
import './StylesN.css'
import './BeltStyle.css'
import 'tachyons'

export class ATM extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:28,
            ATM1:3,
            ATM2:1,
            ATM3:2,
            ATM4:3,
            ATM5:1,
            ATM6:4,
            ATM7:3,
            ATM8:5,
            ATM9:2,
            ATM10:6,
            UtilATM1:20,
            UtilATM2:50,
            UtilATM3:75,
            UtilATM4:60,
            UtilATM5:57,
            UtilATM6:24,
            UtilATM7:30,
            UtilATM8:55,
            UtilATM9:70,
            UtilATM10:25,
        }
    }
    render() {
        const {Total,ATM1,ATM2,ATM3,ATM4,ATM5,ATM6,ATM7,ATM8,ATM9,ATM10,UtilATM1,UtilATM2,UtilATM3,UtilATM4,UtilATM5,UtilATM6,UtilATM7,UtilATM8,UtilATM9,UtilATM10}=this.state;
        const data1 = [
            {x: parseFloat(ATM1*100/Total).toFixed(2) , y: parseInt(ATM1),label:"ATM1"+"-"+ATM1+"M"},
            {x: parseFloat(ATM2*100/Total).toFixed(2) , y: parseInt(ATM2),label:"ATM2"+"-"+ATM2+"M"},
            {x: parseFloat(ATM3*100/Total).toFixed(2) , y: parseInt(ATM3),label:"ATM3"+"-"+ATM3+"M"},
            {x: parseFloat(ATM4*100/Total).toFixed(2) , y: parseInt(ATM4),label:"ATM4"+"-"+ATM4+"M"},
            {x: parseFloat(ATM5*100/Total).toFixed(2) , y: parseInt(ATM5),label:"ATM5"+"-"+ATM5+"M"},
            {x: parseFloat(ATM6*100/Total).toFixed(2) , y: parseInt(ATM6),label:"ATM6"+"-"+ATM6+"M"},
            {x: parseFloat(ATM7*100/Total).toFixed(2) , y: parseInt(ATM7),label:"ATM7"+"-"+ATM7+"M"},
            {x: parseFloat(ATM8*100/Total).toFixed(2) , y: parseInt(ATM8),label:"ATM8"+"-"+ATM8+"M"},
            {x: parseFloat(ATM9*100/Total).toFixed(2) , y: parseInt(ATM9),label:"ATM9"+"-"+ATM9+"M"},
            {x: parseFloat(ATM10*100/Total).toFixed(2) , y: parseInt(ATM10),label:"ATM10"+"-"+ATM10+"M"},
          ];
          const data2 = [
            {Utilization: parseFloat(UtilATM1*100/Total).toFixed(2) , ATM: parseInt(UtilATM1),label:UtilATM1+"%"},
            {Utilization: parseFloat(UtilATM2*100/Total).toFixed(2) , ATM: parseInt(UtilATM2),label:UtilATM2+"%"},
            {Utilization: parseFloat(UtilATM3*100/Total).toFixed(2) , ATM: parseInt(UtilATM3),label:UtilATM3+"%"},
            {Utilization: parseFloat(UtilATM4*100/Total).toFixed(2) , ATM: parseInt(UtilATM4),label:UtilATM4+"%"},
            {Utilization: parseFloat(UtilATM5*100/Total).toFixed(2) , ATM: parseInt(UtilATM5),label:UtilATM5+"%"},
            {Utilization: parseFloat(UtilATM6*100/Total).toFixed(2) , ATM: parseInt(UtilATM6),label:UtilATM6+"%"},
            {Utilization: parseFloat(UtilATM7*100/Total).toFixed(2) , ATM: parseInt(UtilATM7),label:UtilATM7+"%"},
            {Utilization: parseFloat(UtilATM8*100/Total).toFixed(2) , ATM: parseInt(UtilATM8),label:UtilATM8+"%"},
            {Utilization: parseFloat(UtilATM9*100/Total).toFixed(2) , ATM: parseInt(UtilATM9),label:UtilATM9+"%"},
            {Utilization: parseFloat(UtilATM10*100/Total).toFixed(2) , ATM: parseInt(UtilATM10),label:UtilATM10+"%"},
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
                        labelComponent={<VictoryTooltip
                          cornerRadius={20}
                          pointerLength={8}
                        />}
                        events={[{
                            target: "data",
                            eventHandlers: {
                              onMouseOver: () => {
                                return [
                                  {
                                    target: "data",
                                    mutation: () => ({style: {fill: "grays", width: 30}})
                                  }, {
                                    target: "labels",
                                    mutation: () => ({ active: true })
                                  }
                                ];
                              },
                              onMouseOut: () => {
                                return [
                                  {
                                    target: "data",
                                    mutation: () => {}
                                  }, {
                                    target: "labels",
                                    mutation: () => ({ active: false })
                                  }
                                ];
                              }
                            }
                          }]}
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
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-one"></span>: ATM6
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-two"></span>: ATM7
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-three"></span>: ATM8
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-four"></span>: ATM9
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-five"></span>: ATM10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fl w-70 pl3 tc">
                    <p className="f3 pa2 tc mb1 mt3">
                    Percentage Utilization of each ATMs at IGI Airport is as follows: 
                    </p>
                        <VictoryChart 
                            domainPadding={20} 
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    tickValues={[1,2,3,4,5,6,7,8,9,10]}
                                    tickFormat={["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={(y) => (`${y}%`)}
                                />
                                <VictoryBar
                                    data={data2}
                                    events={[{
                                        target: "data",
                                        eventHandlers: {
                                          onMouseOver: () => {
                                            return [
                                              {
                                                target: "data",
                                                mutation: () => ({style: {fill: "grays", width: 30}})
                                              }, {
                                                target: "labels",
                                                mutation: () => ({ active: true })
                                              }
                                            ];
                                          },
                                          onMouseOut: () => {
                                            return [
                                              {
                                                target: "data",
                                                mutation: () => {}
                                              }, {
                                                target: "labels",
                                                mutation: () => ({ active: false })
                                              }
                                            ];
                                          }
                                        }
                                      }]}
            
                                    barWidth={({ index }) => 5}
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
