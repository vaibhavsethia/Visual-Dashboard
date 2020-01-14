/*eslint-disable*/

import React, { Component } from 'react'
import {VictoryPie,VictoryAxis,VictoryBar,VictoryChart,VictoryTheme,VictoryTooltip} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class Washroom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:55,
            Washroom1:3,
            Washroom2:6,
            Washroom3:8,
            Washroom4:6,
            Washroom5:8,
            Washroom6:9,
            UtilWashroom1:20,
            UtilWashroom2:50,
            UtilWashroom3:75,
            UtilWashroom4:60,
            UtilWashroom5:45,
            UtilWashroom6:90,
        }
    }
    render() {
        const {Total,Washroom1,Washroom2,Washroom3,Washroom4,Washroom5,Washroom6,UtilWashroom1,UtilWashroom2,UtilWashroom3,UtilWashroom4,UtilWashroom5,UtilWashroom6}=this.state;
        const data1 = [
            {x: parseFloat(Washroom1*100/Total).toFixed(2) , y: parseInt(Washroom1),label:"Washroom1"+"-"+Washroom1+"M"},
            {x: parseFloat(Washroom2*100/Total).toFixed(2) , y: parseInt(Washroom2),label:"Washroom2"+"-"+Washroom2+"M"},
            {x: parseFloat(Washroom3*100/Total).toFixed(2) , y: parseInt(Washroom3),label:"Washroom3"+"-"+Washroom3+"M"},
            {x: parseFloat(Washroom4*100/Total).toFixed(2) , y: parseInt(Washroom4),label:"Washroom4"+"-"+Washroom4+"M"},
            {x: parseFloat(Washroom5*100/Total).toFixed(2) , y: parseInt(Washroom5),label:"Washroom5"+"-"+Washroom5+"M"},
            {x: parseFloat(Washroom6*100/Total).toFixed(2) , y: parseInt(Washroom6),label:"Washroom6"+"-"+Washroom6+"M"},
          ];
          const data2 = [
            {Utilization: parseFloat(UtilWashroom1*100/Total).toFixed(2) , Washroom: parseInt(UtilWashroom1),label:UtilWashroom1+"%"},
            {Utilization: parseFloat(UtilWashroom2*100/Total).toFixed(2) , Washroom: parseInt(UtilWashroom2),label:UtilWashroom2+"%"},
            {Utilization: parseFloat(UtilWashroom3*100/Total).toFixed(2) , Washroom: parseInt(UtilWashroom3),label:UtilWashroom3+"%"},
            {Utilization: parseFloat(UtilWashroom4*100/Total).toFixed(2) , Washroom: parseInt(UtilWashroom4),label:UtilWashroom4+"%"},
            {Utilization: parseFloat(UtilWashroom5*100/Total).toFixed(2) , Washroom: parseInt(UtilWashroom5),label:UtilWashroom5+"%"},
            {Utilization: parseFloat(UtilWashroom6*100/Total).toFixed(2) , Washroom: parseInt(UtilWashroom6),label:UtilWashroom6+"%"},
          ];
        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the Washrooms used at IGI Airport is as follows: 
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
                                    mutation: () => ({style: {fill: "gray", width: 30}})
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
                        colorScale={["#adb9db","#93a6db","#6e87cc","#5471bf","#3a5dba","#2048b3","#0531a6","#062475","#061745","#020817"]}
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
                                    <span className="Home-key-box Home-key-Box-one"></span>: Washroom1
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-two"></span>: Washroom2
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-three"></span>: Washroom3
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-four"></span>: Washroom4
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-five"></span>: Washroom5
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-six"></span>: Washroom6
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="fl w-70 pl3 tc">
                    <p className="f3 pa2 tc mb1">
                    Percentage Utilization of each Washroom at IGI Airport is as follows: 
                    </p>
                        <VictoryChart 
                            domainPadding={20} 
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    tickValues={[1,2,3,4,5,6]}
                                    tickFormat={["W1","W2","W3","W4","W5","W6"]}
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
                                                mutation: () => ({style: {fill: "gray", width: 30}})
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
            
                                    barWidth={({ index }) => 10}
                                    x="Utilization"
                                    y="Washroom"
                                />
                            </VictoryChart>
                        </div>
            </div>
        )
    }
}

export default Washroom
