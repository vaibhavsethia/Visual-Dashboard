import React, { Component } from 'react'
import {VictoryPie,VictoryTooltip} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class Lounge extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total1:15,
            Normal1:1,
            Normal2:1,
            Normal3:3,
            Normal4:5,
            Normal5:2,
            Normal6:3,
            Total2:9,
            VIP1:4,
            VIP2:2,
            VIP3:1,
            VIP4:2,

        }
    }
    render() {
        const {Total,Normal1,Normal2,Normal3,Normal4,Normal5,Normal6,VIP1,VIP2,VIP3,VIP4}=this.state;
        const data1 = [
            {x: parseFloat(Normal1*100/Total).toFixed(2) , y: parseInt(Normal1),label:"Normal1"+"-"+Normal1+"M"},
            {x: parseFloat(Normal2*100/Total).toFixed(2) , y: parseInt(Normal2),label:"Normal2"+"-"+Normal2+"M"},
            {x: parseFloat(Normal3*100/Total).toFixed(2) , y: parseInt(Normal3),label:"Normal3"+"-"+Normal3+"M"},
            {x: parseFloat(Normal4*100/Total).toFixed(2) , y: parseInt(Normal4),label:"Normal4"+"-"+Normal4+"M"},
            {x: parseFloat(Normal5*100/Total).toFixed(2) , y: parseInt(Normal5),label:"Normal5"+"-"+Normal5+"M"},
            {x: parseFloat(Normal6*100/Total).toFixed(2) , y: parseInt(Normal6),label:"Normal6"+"-"+Normal6+"M"},
          ];
          const data2 = [
            {x: parseFloat(VIP1*100/Total).toFixed(2) , y: parseInt(VIP1),label:"VIP1"+"-"+VIP1+"M"},
            {x: parseFloat(VIP2*100/Total).toFixed(2) , y: parseInt(VIP2),label:"VIP2"+"-"+VIP2+"M"},
            {x: parseFloat(VIP3*100/Total).toFixed(2) , y: parseInt(VIP3),label:"VIP3"+"-"+VIP3+"M"},
            {x: parseFloat(VIP4*100/Total).toFixed(2) , y: parseInt(VIP4),label:"VIP4"+"-"+VIP4+"M"},
          ];
        return (
            <div>
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the Normal Lounges used at IGI Airport is as follows: 
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
                                    <span className="Home-key-box Home-key-Box-one"></span>: Normal1
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-two"></span>: Normal2
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-three"></span>: Normal3
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-four"></span>: Normal4
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-five"></span>: Normal5
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-six"></span>: Normal6
                                </div>
                            </div>
                        </div>
                    </div>
            
                    </div>
                    <div>  
                        <p className="f3 tc mb1">
                            Comparison among the VIP Lounges used at IGI Airport is as follows: 
                        </p>
                        <div className="fl w-60 pa3 f4">
                            <VictoryPie 
                                data={data2}
                                labelComponent={<VictoryTooltip
                                    cornerRadius={20}
                                    pointerLength={8}
                                />}        
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
                                            <span className="Home-key-box Home-key-Box-one"></span>: VIP1
                                        </div>
                                    </div>
                                    <div className="w-100 pa3 mr2 Key-hover">
                                        <div className="link black f4  " href="#" title="CSMI Airport" >
                                            <span className="Home-key-box Home-key-Box-two"></span>: VIP2
                                        </div>
                                    </div>
                                    <div className="w-100 pa3 mr2 Key-hover">
                                        <div className="link black f4 " href="#" title="IGI Airport" >
                                            <span className="Home-key-box Home-key-Box-three"></span>: VIP3
                                        </div>
                                    </div>
                                    <div className="w-100 pa3 mr2 Key-hover">
                                        <div className="link black f4  " href="#" title="CSMI Airport" >
                                            <span className="Home-key-box Home-key-Box-four"></span>: VIP4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
        </div>
        )
    }
}

export default Lounge
