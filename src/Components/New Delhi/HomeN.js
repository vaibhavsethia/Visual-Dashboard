import React, { Component } from 'react'
import './StylesN.css'
import BoardingGate from './BoardingGate'
import BaggageBelt from './BaggageBelt'
import ATM from './ATM'
import Eateries from './Eateries'
import Lounges from './Lounges'
import Parking from './Parking'
import Shopping from './Shopping'
import Trolleys from './Trolleys'
import Vending from './Vending'
import Washroom from './Washroom'
import {VictoryChart,VictoryBar,VictoryAxis,VictoryTheme} from 'victory'

export class HomeN extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             //Data in Million
            PageState:'Home', 
            Total:69,
            BoardingGateNum:69,
            ATMNum:28,
            BaggageBeltNum:55,
            EateriesNum:43,
            LoungesNum:24,
            ParkingNum:52,
            ShoppingNum:11,
            TrolleysNum:47,
            VendingNum:17,
            WashroomNum:55,
        }
    }
    HandleClick = (route) => {
        this.setState({
          PageState : route
        })
    }
    
    render() {
        const {Total,BoardingGateNum,ATMNum,BaggageBeltNum,EateriesNum,LoungesNum,ParkingNum,ShoppingNum,TrolleysNum,VendingNum,WashroomNum}=this.state;
        const data = [
            {Utility: 1, Usage: parseInt(ATMNum),label:ATMNum+"M"},
            {Utility: 2, Usage: parseInt(BoardingGateNum),label:BoardingGateNum+"M"},
            {Utility: 3, Usage: parseInt(BaggageBeltNum),label:BaggageBeltNum+"M"},
            {Utility: 4, Usage: parseInt(EateriesNum),label:EateriesNum+"M"},
            {Utility: 5, Usage: parseInt(LoungesNum),label:LoungesNum+"M"},
            {Utility: 6, Usage: parseInt(ParkingNum),label:ParkingNum+"M"},
            {Utility: 7, Usage: parseInt(ShoppingNum),label:ShoppingNum+"M"},
            {Utility: 8, Usage: parseInt(TrolleysNum),label:TrolleysNum+"M"},
            {Utility: 9, Usage: parseInt(VendingNum),label:VendingNum+"M"},
            {Utility: 10, Usage: parseInt(WashroomNum),label:WashroomNum+"M"},
          ];
        return (
            <div>
                {/*---------------------Body---------------------*/}
                <div className="center">
                    <div className="cf ">
                        {/*---------------------Sidebar---------------------*/}
                        <div className="fl w-20 pa2 Home-sidebar shadow-2">
                            <div className=" pv4">
                                <div className=" flex flex-column">
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Boarfing gates" onClick={()=>this.HandleClick('Home') }>Home</a>              
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Boarfing gates" onClick={()=>this.HandleClick('Boarding') }>Boarding Gates</a>              
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="baggage belts" onClick={()=>this.HandleClick('Baggage') }>Baggage Belt</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Parking" onClick={()=>this.HandleClick('Parking') }>Parking</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Trolleys" onClick={()=>this.HandleClick('Trolleys') }>Trolleys</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Shopping outlets" onClick={()=>this.HandleClick('Shopping') }>Shopping Outlets</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Eateries" onClick={()=>this.HandleClick('Eat') }>Eateries</a>               
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="ATM" onClick={()=>this.HandleClick('ATM') }>ATM Machines</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Washtoom" onClick={()=>this.HandleClick('Washroom') }>Washroom Facility</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Lounge" onClick={()=>this.HandleClick('Lounge') }>Lounges</a>
                                    <a className="link dim white f4 fw3 pa4 dib mr2 Home-sidebar-button" href="#" title="Vending" onClick={()=>this.HandleClick('Vending') }>Vending Machines</a>
                                </div>
                            </div>
                        </div>
                        {/*---------------------MainBody---------------------*/}
                        <div className="fl w-80  back3">
                        {
                            this.state.PageState === 'Boarding'?
                            <BoardingGate></BoardingGate>
                                :this.state.PageState === 'Baggage'?
                                <BaggageBelt></BaggageBelt>  
                                    :this.state.PageState === 'Parking'?
                                    <Parking></Parking>
                                        :this.state.PageState === 'Trolleys'?
                                        <Trolleys></Trolleys>
                                            :this.state.PageState === 'Shopping'?
                                            <Shopping></Shopping>
                                                :this.state.PageState === 'Eat'?
                                                <Eateries></Eateries>
                                                    :this.state.PageState === 'ATM'?
                                                    <ATM></ATM>
                                                        :this.state.PageState === 'Washroom'?
                                                        <Washroom></Washroom>
                                                            :this.state.PageState === 'Lounge'?
                                                            <Lounges></Lounges>
                                                                :this.state.PageState === 'Vending'?
                                                                <Vending></Vending>
                                                                    :
                                                                    <div>
                                                                        <p className="f3 tc mb1">Indira Gandhi International Airport</p>
                                                                        <p className="f4 tc mt1">New Delhi</p>
                                                                        <p className="pl3 pr3 f4 fw3">
                                                                            <strong>Indira Gandhi International Airport</strong> serves as the major international aviation hub of the 
                                                                            Indian capital city of New Delhi as well as India. 
                                                                            The airport, spread over an area of 5,106 acres is situated in Palam, 15 km south-west of the New Delhi 
                                                                            railway station and 16 km from New Delhi city centre.
                                                                        </p>
                                                                        <p className="pl3 pr3 f4 fw3">
                                                                            Named after former Prime Minister of India Indira 
                                                                            Gandhi, it is the busiest airport in India in terms of passenger traffic since 2009. It is also the 
                                                                            busiest airport in the country in terms of cargo traffic, overtaking Mumbai during late 2015. 
                                                                            In the calendar year 2018, it was the 12th busiest airport in the world and 6th busiest airport 
                                                                            in Asia by passenger traffic handling nearly 70 million passengers. 
                                                                        </p>
                                                                        <p className="pl3 pr3 pb2 f4 fw3">
                                                                            It is the world's 
                                                                            busiest airport for Airbus A320 aircraft.The under construction expansion program will 
                                                                            increase the airport's capacity to handle 100 million passengers by 2030.
                                                                        </p>
                                                                        {/*---------------------Chart---------------------*/}
                                                                        <p className="f3 pa2 tc mb1">
                                                                            Comparison among the most used utilities at IGI Airport is as follows: 
                                                                        </p>
                                                                        <div className="fl w-60 pl3">
                                                                            <VictoryChart 
                                                                            domainPadding={20} 
                                                                            theme={VictoryTheme.material} 
                                                                            animate={{duration: 2000}}
                                                                            style={{ parent: { maxWidth: "100%" } }}>
                                                                                <VictoryAxis
                                                                                    tickValues={[1, 2, 3, 4,5,6,7,8,9,10]}
                                                                                    tickFormat={["U1", "U2", "U3", "U4","U5", "U6", "U7", "U8","U9", "U10"]}
                                                                                    />
                                                                                <VictoryAxis
                                                                                dependentAxis
                                                                                tickFormat={(y) => (`${y}M`)}
                                                                                />
                                                                                <VictoryBar
                                                                                data={data}
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
                                                        
                                                                                barWidth={({ index }) => 7}
                                                                                x="Utility"
                                                                                y="Usage"
                                                                                />
                                                                            </VictoryChart>
                                                                        </div>
                                                                        <div className="fl w-30 pa1 Home-key shadow-2 ">
                                                                        <p className="f3 b tc">Key</p>
                                                                        <div className="flex flex-column">
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="ATM" onClick={()=>this.HandleClick('ATM') }>
                                                                                    <span className="ml3 f4 fw5">U1</span>: ATM Facility
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Boarding" onClick={()=>this.HandleClick('Boarding') }>
                                                                                    <span className="ml3 f4 fw5">U2</span>: Boarding Gats
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Baggage" onClick={()=>this.HandleClick('Baggage') }>
                                                                                    <span className="ml3 f4 fw5">U3</span>: Baggage Belts
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Eat" onClick={()=>this.HandleClick('Eat') }>
                                                                                    <span className="ml3 f4 fw5">U4</span>: Eateries
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Lounge" onClick={()=>this.HandleClick('Lounge') }>
                                                                                    <span className="ml3 f4 fw5">U5</span>: Lounge Facility
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Parking" onClick={()=>this.HandleClick('Parking') }>
                                                                                    <span className="ml3 f4 fw5">U6</span>: Parking
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Shopping" onClick={()=>this.HandleClick('Shopping') }>
                                                                                    <span className="ml3 f4 fw5">U7</span>: Shopping Outlets
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Trolleys" onClick={()=>this.HandleClick('Trolleys') }>
                                                                                    <span className="ml3 f4 fw5">U8</span>: Trolleys
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover">
                                                                                <a className="link black f4" href="#" title="Vending" onClick={()=>this.HandleClick('Vending') }>
                                                                                    <span className="ml3 f4 fw5">U9</span>: Vending Machine
                                                                                </a>
                                                                            </div>
                                                                            <div className="w-100 pa1 mr1 Key-hover pb3">
                                                                                <a className="link black f4" href="#" title="Washroom" onClick={()=>this.HandleClick('Washroom') }>
                                                                                    <span className="ml3 f4 fw5">U10</span>: Washroom Facility
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeN
