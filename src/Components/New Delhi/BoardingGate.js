/*eslint-disable */
import React, { Component } from 'react'
import {VictoryPie,VictoryTooltip,VictoryBar,VictoryAxis,VictoryChart,VictoryTheme} from 'victory'
import './StylesN.css'

export class BoardingGate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:69,
            Gate1:19,
            Gate2:14,
            Gate3:11,
            Gate4:9,
            Gate5:9,
            Gate6:7,
            UtilGate1:70,
            UtilGate2:55,
            UtilGate3:60,
            UtilGate4:30,
            UtilGate5:50,
            UtilGate6:20,
        }
    }
    
    render() {
        const {Total,Gate1,Gate2,Gate3,Gate4,Gate5,Gate6,UtilGate1,UtilGate2,UtilGate3,UtilGate4,UtilGate5,UtilGate6}=this.state;
        const data = [
            {x: parseFloat(Gate1*100/Total).toFixed(2) , y: parseFloat(Gate1),label:"Gate1"+"-"+Gate1+"M"},
            {x: parseFloat(Gate2*100/Total).toFixed(2) , y: parseFloat(Gate2),label:"Gate2"+"-"+Gate2+"M"},
            {x: parseFloat(Gate3*100/Total).toFixed(2) , y: parseFloat(Gate3),label:"Gate3"+"-"+Gate3+"M"},
            {x: parseFloat(Gate4*100/Total).toFixed(2) , y: parseFloat(Gate4),label:"Gate4"+"-"+Gate4+"M"},
            {x: parseFloat(Gate5*100/Total).toFixed(2) , y: parseFloat(Gate5),label:"Gate5"+"-"+Gate5+"M"},
            {x: parseFloat(Gate6*100/Total).toFixed(2) , y: parseFloat(Gate6),label:"Gate6"+"-"+Gate6+"M"},
          ];
        const Utildata=[
            {Utilization: parseFloat(UtilGate1*100/Total).toFixed(2) , Gate: parseInt(UtilGate1),label:UtilGate1+"%"},
            {Utilization: parseFloat(UtilGate2*100/Total).toFixed(2) , Gate: parseInt(UtilGate2),label:UtilGate2+"%"},
            {Utilization: parseFloat(UtilGate3*100/Total).toFixed(2) , Gate: parseInt(UtilGate3),label:UtilGate3+"%"},
            {Utilization: parseFloat(UtilGate4*100/Total).toFixed(2) , Gate: parseInt(UtilGate4),label:UtilGate4+"%"},
            {Utilization: parseFloat(UtilGate5*100/Total).toFixed(2) , Gate: parseInt(UtilGate5),label:UtilGate5+"%"},
            {Utilization: parseFloat(UtilGate6*100/Total).toFixed(2) , Gate: parseInt(UtilGate6),label:UtilGate6+"%"}
        ];
        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the entry gates used at IGI Airport is as follows: 
                </p>
                <div>
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
                        data={data} 
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        colorScale={["#4f72db","#2a56db","#063ad6","#0731ad","#04278f","#031b61"]}
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
                                    <span className="Home-key-box Home-key-box-one"></span>: Gate1
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-box-two"></span>: Gate2
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-box-three"></span>: Gate3
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-box-four"></span>: Gate4
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-box-five"></span>: Gate5
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-box-six"></span>: Gate6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className="fl w-70 pl3 tc">
                    <p className="f3 pa2 tc mb2 ">
                    Percentage Utilization of each Boarding Gate at IGI Airport is as follows: 
                    </p>
                        <VictoryChart 
                            domainPadding={20} 
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    tickValues={[1, 2, 3, 4,5,6,7,8,9,10]}
                                    tickFormat={["B1", "B2", "B3", "B4","B5", "B6", "B7", "B8","B9", "B10"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={(y) => (`$${y}%`)}
                                />
                                <VictoryBar
                                    data={Utildata}
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
            
                                    barWidth={({ index }) => 5}
                                    x="Utilization"
                                    y="Gate"
                                />
                            </VictoryChart>
                        </div>
            </div>
        )
    }
}

export default BoardingGate
