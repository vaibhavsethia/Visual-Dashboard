import React, { Component } from 'react'
import {VictoryPie,VictoryAxis,VictoryBar,VictoryChart,VictoryTheme,VictoryTooltip} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class Shopping extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Total:11,
            Apparel:2,
            Beauty:1,
            Electronics:0.5,
            Pharmacy:3,
            Toys:1,
            Gifts:1,
            WineShops:1,
            Jewelery:0.5,
            PackedFoods:1,
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
        const {Total,Apparel,Beauty,Electronics,Pharmacy,Toys,Gifts,WineShops,Jewelery,PackedFoods,UtilBelt1,UtilBelt2,UtilBelt3,UtilBelt4,UtilBelt5,UtilBelt6,UtilBelt7,UtilBelt8,UtilBelt9,UtilBelt10}=this.state;
        const data1 = [
            {x: parseFloat(Apparel*100/Total).toFixed(2) , y: parseInt(Apparel),label:"Apparel"+"-"+Apparel+"M"},
            {x: parseFloat(Beauty*100/Total).toFixed(2) , y: parseInt(Beauty),label:"Beauty"+"-"+Beauty+"M"},
            {x: parseFloat(Electronics*100/Total).toFixed(2) , y: parseInt(Electronics),label:"Electronics"+"-"+Electronics+"M"},
            {x: parseFloat(Pharmacy*100/Total).toFixed(2) , y: parseInt(Pharmacy),label:"Pharmacy"+"-"+Pharmacy+"M"},
            {x: parseFloat(Toys*100/Total).toFixed(2) , y: parseInt(Toys),label:"Toys"+"-"+Toys+"M"},
            {x: parseFloat(Gifts*100/Total).toFixed(2) , y: parseInt(Gifts),label:"Gifts"+"-"+Gifts+"M"},
            {x: parseFloat(WineShops*100/Total).toFixed(2) , y: parseInt(WineShops),label:"WineShops"+"-"+WineShops+"M"},
            {x: parseFloat(Jewelery*100/Total).toFixed(2) , y: parseInt(Jewelery),label:"Jewelery"+"-"+Jewelery+"M"},
            {x: parseFloat(PackedFoods*100/Total).toFixed(2) , y: parseInt(PackedFoods),label:"PackedFoods"+"-"+PackedFoods+"M"},
          ];
          const data2 = [
            {Utilization: parseFloat(UtilBelt1*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt1),label:UtilBelt1+"%"},
            {Utilization: parseFloat(UtilBelt2*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt2),label:UtilBelt2+"%"},
            {Utilization: parseFloat(UtilBelt3*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt3),label:UtilBelt3+"%"},
            {Utilization: parseFloat(UtilBelt4*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt4),label:UtilBelt4+"%"},
            {Utilization: parseFloat(UtilBelt5*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt5),label:UtilBelt5+"%"},
            {Utilization: parseFloat(UtilBelt6*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt6),label:UtilBelt6+"%"},
            {Utilization: parseFloat(UtilBelt7*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt7),label:UtilBelt7+"%"},
            {Utilization: parseFloat(UtilBelt8*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt8),label:UtilBelt8+"%"},
            {Utilization: parseFloat(UtilBelt9*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt9),label:UtilBelt9+"%"},
            {Utilization: parseFloat(UtilBelt10*100/Total).toFixed(2) , ShoppingOutlet: parseInt(UtilBelt10),label:UtilBelt10+"%"},
          ];
        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Comparison among the Shopping Outlets used at IGI Airport is as follows: 
                </p>
                <div className="fl w-60 pa3 f4">
                    <VictoryPie 
                        data={data1}
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
                                    <span className="Home-key-box Home-key-Box-one"></span>: Apparel
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-two"></span>: Beauty
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-three"></span>: Electronics
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-four"></span>: Pharmacy
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-five"></span>: Toys
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-six"></span>: Gifts
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-seven"></span>: WineShops
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4  " href="#" title="CSMI Airport" >
                                    <span className="Home-key-box Home-key-Box-eight"></span>: Jewelery
                                </div>
                            </div>
                            <div className="w-100 pa3 mr2 Key-hover">
                                <div className="link black f4 " href="#" title="IGI Airport" >
                                    <span className="Home-key-box Home-key-Box-nine"></span>: PackedFoods
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="f3 pa2 tc mb1">
                    Percentage Utilization of each Shopping Outlets at IGI Airport is as follows: 
                    </p>
                    <div className="fl w-70 pl3 tc">
                        <VictoryChart 
                            domainPadding={20} 
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    tickValues={[1, 2, 3, 4,5,6,7,8,9,10]}
                                    tickFormat={["O1", "O2", "O3", "O4","O5", "O6", "O7", "O8","O9", "O10"]}
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
                                    y="ShoppingOutlet"
                                />
                            </VictoryChart>
                        </div>
            </div>
        )
    }
}

export default Shopping
