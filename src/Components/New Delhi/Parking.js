import React, { Component } from 'react'
import {VictoryAxis,VictoryBar,VictoryChart,VictoryTheme} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class Parking extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Month1:60,
            Month2:50,
            Month3:40,
            Month4:55,
            Month5:75,
            Month6:90,
            Month7:85,
            Month8:75,
            Month9:45,
            Month10:70,
            Month11:80,
            Month12:70,
            Level1:80,
            Level2:60,
            Level3:30,
            Level4:50,
            Level5:30
        }
    }
    
    render() {
        const {Month1,Month2,Month3,Month4,Month5,Month6,Month7,Month8,Month9,Month10,Month11,Month12,Level5,Level4,Level2,Level3,Level1}=this.state;
        const data2 = [
            {Month:1 , Parking: parseFloat(Month1),label:Month1+"%"},
            {Month:2 , Parking: parseFloat(Month2),label:Month2+"%"},
            {Month:3 , Parking: parseFloat(Month3),label:Month3+"%"},
            {Month:4 , Parking: parseFloat(Month4),label:Month4+"%"},
            {Month:5 , Parking: parseFloat(Month5),label:Month5+"%"},
            {Month:6 , Parking: parseFloat(Month6),label:Month6+"%"},
            {Month:7 , Parking: parseFloat(Month7),label:Month7+"%"},
            {Month:8 , Parking: parseFloat(Month8),label:Month8+"%"},
            {Month:9 , Parking: parseFloat(Month9),label:Month9+"%"},
            {Month: 10 , Parking: parseFloat(Month10),label:Month10+"%"},
            {Month: 11 , Parking: parseFloat(Month11),label:Month11+"%"},
            {Month: 12 , Parking: parseFloat(Month12),label:Month12+"%"},
          ];
          const Leveldata=[
            {Level:1, Util: parseFloat(Level1) , label: Level1+"%"}, 
            {Level:2, Util: parseFloat(Level2) , label: Level2+"%"}, 
            {Level:3, Util: parseFloat(Level3) , label: Level3+"%"}, 
            {Level:4, Util: parseFloat(Level4) , label: Level4+"%"}, 
            {Level:5, Util: parseFloat(Level5) , label: Level5+"%"}, 
          ];

        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Percentage Utilization of Car Park IGI Airport is as follows: 
                    </p>
                    <div className="fl w-70 pl3 tc">
                        <VictoryChart 
                            domainPadding={20}
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    tickValues={[1, 2, 3, 4,5,6,7,8,9,10,11,12]}
                                    tickFormat={["Jan", "Feb", "Mar", "Apr","May","Jun", "Jul", "Aug","Sep", "Oct","Nov","Dec"]}
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
            
                                    barWidth={({ index }) => 5}
                                    x="Month"
                                    y="Parking"
                                />
                            </VictoryChart>
                            <div className="">
                              <p className="f3 pa2 tc mb1">
                      Percentage Utilization of Levels of Car Park IGI Airport is as follows: 
                      </p>
                      <div className="fl w-100 pl3 tc">
                          <VictoryChart 
                              domainPadding={20}
                              theme={VictoryTheme.material} 
                              animate={{duration: 2000}}
                              style={{ parent: { maxWidth: "100%" } }}>
                                  <VictoryAxis
                                      tickValues={[1, 2, 3, 4,5]}
                                      tickFormat={["L1", "L2", "L3", "L4","L5"]}
                                  />
                                  <VictoryAxis
                                      dependentAxis
                                      tickFormat={(y) => (`${y}%`)}
                                  />
                                  <VictoryBar
                                      data={Leveldata}
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
                                      x="Level"
                                      y="Util"
                                  />
                              </VictoryChart>
                              </div>
                            </div>
                    </div>
            </div>
        )
    }
}

export default Parking
