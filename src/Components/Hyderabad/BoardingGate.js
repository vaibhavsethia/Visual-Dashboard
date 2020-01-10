import React, { Component } from 'react'
import {VictoryPie} from 'victory'
import './StylesH.css'

export class BoardingGate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:21,
            Gate1:7,
            Gate2:7,
            Gate3:4,
            Gate4:3,
        }
    }
    
    render() {
        const {Total,Gate1,Gate2,Gate3,Gate4}=this.state;
        const data = [
            {x: parseFloat(Gate1*100/Total).toFixed(2) , y: parseInt(Gate1)},
            {x: parseFloat(Gate2*100/Total).toFixed(2) , y: parseInt(Gate2)},
            {x: parseFloat(Gate3*100/Total).toFixed(2) , y: parseInt(Gate3)},
            {x: parseFloat(Gate4*100/Total).toFixed(2) , y: parseInt(Gate4)},
          ];
        return (
            <div>
                <p className="f2 tc mb1">Ragiv Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the entry gates used at RGI Airport is as follows: 
                </p>
                <div className="fl w-60 pa3 f4">
                    <VictoryPie 
                        data={data} 
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        colorScale={["#4f72db","#2a56db","#063ad6","#0731ad"]}
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
                        </div>
                    </div>
            </div>
        )
    }
}

export default BoardingGate
