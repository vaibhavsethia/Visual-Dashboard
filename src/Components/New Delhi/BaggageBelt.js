import React, { Component } from 'react'
import {VictoryPie,VictoryAxis,VictoryBar,VictoryChart,VictoryTheme,VictoryTooltip} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class BaggageBelt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:55,
            Belt1:3,
            Belt2:6,
            Belt3:8,
            Belt4:6,
            Belt5:8,
            Belt6:9,
            Belt7:7,
            Belt8:5,
            Belt9:3,
            Belt10:1,
            UtilBelt1:20,
            UtilBelt2:50,
            UtilBelt3:75,
            UtilBelt4:60,
            UtilBelt5:75,
            UtilBelt6:90,
            UtilBelt7:65,
            UtilBelt8:45,
            UtilBelt9:33,
            UtilBelt10:21,
        }
    }
    render() {
        const {Total,Belt1,Belt2,Belt3,Belt4,Belt5,Belt6,Belt7,Belt8,Belt9,Belt10,UtilBelt1,UtilBelt2,UtilBelt3,UtilBelt4,UtilBelt5,UtilBelt6,UtilBelt7,UtilBelt8,UtilBelt9,UtilBelt10}=this.state;
        const data1 = [
            {x: parseFloat(Belt1*100/Total).toFixed(2) , y: parseInt(Belt1),label:"Belt1"+"-"+Belt1+"M"},
            {x: parseFloat(Belt2*100/Total).toFixed(2) , y: parseInt(Belt2),label:"Belt2"+"-"+Belt2+"M"},
            {x: parseFloat(Belt3*100/Total).toFixed(2) , y: parseInt(Belt3),label:"Belt3"+"-"+Belt3+"M"},
            {x: parseFloat(Belt4*100/Total).toFixed(2) , y: parseInt(Belt4),label:"Belt4"+"-"+Belt4+"M"},
            {x: parseFloat(Belt5*100/Total).toFixed(2) , y: parseInt(Belt5),label:"Belt5"+"-"+Belt5+"M"},
            {x: parseFloat(Belt6*100/Total).toFixed(2) , y: parseInt(Belt6),label:"Belt6"+"-"+Belt6+"M"},
            {x: parseFloat(Belt7*100/Total).toFixed(2) , y: parseInt(Belt7),label:"Belt7"+"-"+Belt7+"M"},
            {x: parseFloat(Belt8*100/Total).toFixed(2) , y: parseInt(Belt8),label:"Belt8"+"-"+Belt8+"M"},
            {x: parseFloat(Belt9*100/Total).toFixed(2) , y: parseInt(Belt9),label:"Belt9"+"-"+Belt9+"M"},
            {x: parseFloat(Belt10*100/Total).toFixed(2) , y: parseInt(Belt10),label:"Belt10"+"-"+Belt10+"M"},
          ];
          const data2 = [
            {Utilization: parseFloat(UtilBelt1*100/Total).toFixed(2) , Belt: parseInt(UtilBelt1),label:UtilBelt1+"%"},
            {Utilization: parseFloat(UtilBelt2*100/Total).toFixed(2) , Belt: parseInt(UtilBelt2),label:UtilBelt2+"%"},
            {Utilization: parseFloat(UtilBelt3*100/Total).toFixed(2) , Belt: parseInt(UtilBelt3),label:UtilBelt3+"%"},
            {Utilization: parseFloat(UtilBelt4*100/Total).toFixed(2) , Belt: parseInt(UtilBelt4),label:UtilBelt4+"%"},
            {Utilization: parseFloat(UtilBelt5*100/Total).toFixed(2) , Belt: parseInt(UtilBelt5),label:UtilBelt5+"%"},
            {Utilization: parseFloat(UtilBelt6*100/Total).toFixed(2) , Belt: parseInt(UtilBelt6),label:UtilBelt6+"%"},
            {Utilization: parseFloat(UtilBelt7*100/Total).toFixed(2) , Belt: parseInt(UtilBelt7),label:UtilBelt7+"%"},
            {Utilization: parseFloat(UtilBelt8*100/Total).toFixed(2) , Belt: parseInt(UtilBelt8),label:UtilBelt8+"%"},
            {Utilization: parseFloat(UtilBelt9*100/Total).toFixed(2) , Belt: parseInt(UtilBelt9),label:UtilBelt9+"%"},
            {Utilization: parseFloat(UtilBelt10*100/Total).toFixed(2) , Belt: parseInt(UtilBelt10),label:UtilBelt10+"%"},
          ];
        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the Baggage Belts used at IGI Airport is as follows: 
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
                                    mutation: () => ({style: {fill: "gold", width: 30}})
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
                                    <span className="Home-key-box Home-key-Box-one"></span>: Belt1
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-two"></span>: Belt2
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-three"></span>: Belt3
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-four"></span>: Belt4
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-five"></span>: Belt5
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-six"></span>: Belt6
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-seven"></span>: Belt7
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-eight"></span>: Belt8
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-nine"></span>: Belt9
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-ten"></span>: Belt10
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="f3 pa2 tc mb1">
                    Percentage Utilization of each Baggage belt at IGI Airport is as follows: 
                    </p>
                    <div className="fl w-70 pl3 tc">
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
                                    data={data2}
                                    events={[{
                                        target: "data",
                                        eventHandlers: {
                                          onMouseOver: () => {
                                            return [
                                              {
                                                target: "data",
                                                mutation: () => ({style: {fill: "gold", width: 30}})
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
                                    y="Belt"
                                />
                            </VictoryChart>
                        </div>
            </div>
        )
    }
}

export default BaggageBelt
