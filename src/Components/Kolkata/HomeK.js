import React, { Component } from 'react'
import './StylesK.css'
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

export class HomeK extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             //Data in Million
            PageState:'Home', 
            Total:21,
            BoardingGateNum:21,
            ATMNum:9,
            BaggageBeltNum:18,
            EateriesNum:17,
            LoungesNum:14,
            ParkingNum:19,
            ShoppingNum:8,
            TrolleysNum:19,
            VendingNum:12,
            WashroomNum:19,
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
            {Utility: 1, Usage: parseInt(ATMNum)},
            {Utility: 2, Usage: parseInt(BoardingGateNum)},
            {Utility: 3, Usage: parseInt(BaggageBeltNum)},
            {Utility: 4, Usage: parseInt(EateriesNum)},
            {Utility: 5, Usage: parseInt(LoungesNum)},
            {Utility: 6, Usage: parseInt(ParkingNum)},
            {Utility: 7, Usage: parseInt(ShoppingNum)},
            {Utility: 8, Usage: parseInt(TrolleysNum)},
            {Utility: 9, Usage: parseInt(VendingNum)},
            {Utility: 10, Usage: parseInt(WashroomNum)},
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
                                                                        <p className="f3 tc mb1">Netaji Subhash Chandra Bose International Airport</p>
                                                                        <p className="f4 tc mt1">New Delhi</p>
                                                                        <p className="pl3 pr3 f4 fw3">
                                                                            <strong>Netaji Subhash Chandra Bose International Airport</strong> is an international airport 
                                                                            located in Dum Dum, West Bengal, India, serving the Kolkata metropolitan area.
                                                                            It is located approximately 17 kilometres from the city centre. The airport was earlier known 
                                                                            as Dum Dum Airport before being renamed in 1995 after Netaji Subhas Chandra Bose, a prominent 
                                                                            leader of the Indian independence movement.
                                                                        </p>
                                                                        <p className="pl3 pr3 f4 fw3">
                                                                        Spread over an area of 1,641 acres (664 ha), Kolkata airport 
                                                                        is the largest hub for air traffic in the eastern part of 
                                                                        the country and one of two international airports operating in West Bengal, the other being Bagdogra.
                                                                        The airport is a major centre for flights to Northeast India, Bangladesh, Bhutan, China and Southeast Asia. 
                                                                        In 2014 and 2015, Kolkata Airport won 
                                                                        the title of Best Improved Airport in the Asia-Pacific region awarded by the Airport Council International.
                                                                        </p>
                                                                        {/*---------------------Chart---------------------*/}
                                                                        <p className="f3 pa2 tc mb1">
                                                                            Comparison among the most used utilities at RGI Airport is as follows: 
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
                                                                                tickFormat={(y) => (`$${y}M`)}
                                                                                />
                                                                                <VictoryBar
                                                                                data={data}
                                                                                barWidth={({ index }) => 5}
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

export default HomeK
