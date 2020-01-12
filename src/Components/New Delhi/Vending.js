import React, { Component } from 'react'
import {VictoryAxis,VictoryBar,VictoryChart,VictoryTheme} from 'victory'
import './StylesN.css'
import './BeltStyle.css'

export class Vending extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Month1:70,
            Month2:60,
            Month3:90,
            Month4:55,
            Month5:75,
            Month6:90,
            Month7:85,
            Month8:75,
            Month9:45,
            Month10:70,
            Month11:80,
            Month12:70,
        }
    }
    
    render() {
        const {Month1,Month2,Month3,Month4,Month5,Month6,Month7,Month8,Month9,Month10,Month11,Month12}=this.state;
        const data2 = [
            {Month:"1" , Belt: parseInt(Month1),label:Month1+"%"},
            {Month:"2" , Belt: parseInt(Month2),label:Month2+"%"},
            {Month:"3" , Belt: parseInt(Month3),label:Month3+"%"},
            {Month:"4" , Belt: parseInt(Month4),label:Month4+"%"},
            {Month:"5" , Belt: parseInt(Month5),label:Month5+"%"},
            {Month:"6" , Belt: parseInt(Month6),label:Month6+"%"},
            {Month:"7" , Belt: parseInt(Month7),label:Month7+"%"},
            {Month:"8" , Belt: parseInt(Month8),label:Month8+"%"},
            {Month:"9" , Belt: parseInt(Month9),label:Month9+"%"},
            {Month: "10" , Belt: parseInt(Month10),label:Month10+"%"},
            {Month: "11" , Belt: parseInt(Month11),label:Month11+"%"},
            {Month: "12" , Belt: parseInt(Month12),label:Month12+"%"},
          ];
        return (
            <div>
                <p className="f2 tc mb1">Indira Gandhi International Airport</p>
                <p className="f4 tc mt1">New Delhi</p>
                <p className="f3 pa2 tc mb1">
                    Percentage Utilization of Trolleys at IGI Airport is as follows: 
                    </p>
                    <div className="fl w-70 pl3 tc">
                        <VictoryChart 
                            domainPadding={40} 
                            theme={VictoryTheme.material} 
                            animate={{duration: 2000}}
                            style={{ parent: { maxWidth: "100%" } }}>
                                <VictoryAxis
                                    
                                    tickValues={[1, 2, 3, 4,5,6,7,8,9,10,11,12]}
                                    tickFormat={["Jan", "Feb", "Mar", "Apr","May", "Jun", "Jul", "Aug","Sep", "Oct","Nov","Dec"]}
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

export default Vending
