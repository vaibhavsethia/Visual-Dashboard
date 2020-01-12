import React, { Component } from 'react'
import './App.css';
import 'tachyons'
//import './Styles.css'
import {VictoryPie,VictoryTooltip} from 'victory'
//import Home from '../Components/Home'
import HomeN from '../Components/New Delhi/HomeN'
import HomeM from '../Components/Mumbai/HomeM'
import HomeK from '../Components/Kolkata/HomeK'
import HomeC from '../Components/Chennai/HomeC'
import HomeB from '../Components/Bangalore/HomeB'
import HomeH from '../Components/Hyderabad/HomeH'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      //Data in Million
       PageState:'HomeN',
       IGI:69,     //New Delhi
       CSMI:48,    //Mumbai
       NSBI:21,    //Kolkata
       KI:33,      //Bangalore
       CI:22,      //Chennai
       RGI:21,     //hyderabad
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  HandleClick = (route) => {
    this.setState({
      PageState : route
    })
  }

  render() {
    const {IGI,CSMI,NSBI,KI,CI,RGI} = this.state;
    const Total=IGI+CSMI+NSBI+KI+CI+RGI;
    console.log(this.state.PageState);
    const data = [
        {x: parseFloat(IGI*100/Total).toFixed(2), y: parseFloat(IGI/Total),label:"IGI"+"-"+IGI+"M"},
        {x: parseFloat(CSMI*100/Total).toFixed(2), y: parseFloat(CSMI/Total),label:"CSMI"+"-"+CSMI+"M"},
        {x: parseFloat(NSBI*100/Total).toFixed(2), y: parseFloat(NSBI/Total),label:"NSBI"+"-"+NSBI+"M"},
        {x: parseFloat(KI*100/Total).toFixed(2), y: parseFloat(KI/Total),label:"KI"+"-"+KI+"M"},
        {x: parseFloat(CI*100/Total).toFixed(2), y: parseFloat(CI/Total),label:"CI"+"-"+CI+"M"},
        {x: parseFloat(RGI*100/Total).toFixed(2), y: parseFloat(RGI/Total),label:"RGI"+"-"+RGI+"M"}
      ];
    return (
      <div className="">
      {/*---------------------NavBar--------------------- Flex Box */}
      <div className="Head shadow-2">
        <nav className="pa3 pa4-ns">
          <div className="fl tc pr2">
            <img alt="logo" className="Head-logo" title="Airport Authority of India" src="https://www.aai.aero/sites/default/files/aai-logo1_2_0.png"></img>
          </div>
          <div className="fl flex flex-column">
            <a className="link dim b f1 db mb3 Head-text f3" href="#" onClick={()=>this.HandleClick('Home') }>Airport Authority of India</a>
            <a className="link dim b f1 db mb3 Head-text f3" href="#" onClick={()=>this.HandleClick('Home') }>भारतीय विमानपत्तन प्राधिकरण</a>
          </div>
        </nav>
      </div>
      {/*---------------------Body---------------------*/}
      <div className=" center">
        <div className="cf ">
          {/*---------------------SecondNavBar---------------------Horizontal Scrollable*/}
          <nav className="">
            <div className="nowrap overflow-x-auto SecondNav shadow-2">
              <a className="link dim white f5 f4-ns dib mr1 ml2 SecondNav-anchors" href="#" title="IGI Airport" onClick={()=>this.HandleClick('IGI') }>
                <p className="tc">
                  IGI Airport,
                </p>
                <p className="tc">
                  New Delhi
                </p>
              </a>
              <a className="link dim white f5 f4-ns dib mr1 ml2 SecondNav-anchors" href="#" title="CSMI Airport" onClick={()=>this.HandleClick('CSMI') }>
              <p className="tc">
                  CSMI Airport,
                </p>
                <p className="tc">
                  Mumbai
                </p>
              </a>
              <a className="link dim white f5 f4-ns dib mr1 ml2 SecondNav-anchors" href="#" title="NSCBI Airport" onClick={()=>this.HandleClick('NSCBI') }>
                <p className="tc">
                  NSCBI Airport,
                </p>
                <p className="tc">
                  Kolkata
                </p>
              </a>
              <a className="link dim white f5 f4-ns dib mr1 ml2 SecondNav-anchors" href="#" title="CI Airport" onClick={()=>this.HandleClick('CI') }>
                <p className="tc">
                  CI Airport,
                </p>
                <p className="tc">
                  Chennai
                </p>
              </a>
              <a className="link dim white f5 f4-ns dib mr1 ml2 SecondNav-anchors" href="#" title="KI Airport" onClick={()=>this.HandleClick('KI') }>
                <p className="tc">
                  KI Airport,
                </p>
                <p className="tc">
                  Bangalore
                </p>
              </a>
              <a className="link dim white f5 f4-ns dib mr1 ml2 SecondNav-anchors" href="#" title="TI Airport" onClick={()=>this.HandleClick('RGI') }>
                <p className="tc">
                  RGI Airport,
                </p>
                <p className="tc">
                  Hyderabad
                </p>
              </a>
            </div>
          </nav>
          {/*---------------------MainBody---------------------*/}
          <div className="">
          {
            this.state.PageState === 'IGI'?
            <HomeN></HomeN>
              :this.state.PageState === 'CSMI'?
                <HomeM></HomeM>
                  :this.state.PageState === 'NSCBI'?
                    <HomeK></HomeK>
                      :this.state.PageState === 'CI'?
                        <HomeC></HomeC>
                          :this.state.PageState === 'KI'?
                          <HomeB></HomeB>
                            :this.state.PageState === 'RGI'?
                              <HomeH></HomeH>
                                :
                                  <div>
                                    {/*---------------------Initial HomePage---------------------*/}
                                    {/*---------------------Left Side Content---------------------Content can be improved*/}
                                    <div className="mt4 mb3">
                                        <div className="fl w-50 pa3 f4 fw3">
                                            <p className="">
                                            Airports in India are managed by <strong>Airports Authority of India </strong>(AAI). 
                                            Ministry of Civil Aviation is responsible for creating, upgrading, maintaining and managing 
                                            civil aviation infrastructure in India.
                                            </p>
                                            <p>
                                            <strong>Airports Authority of India </strong>(AAI) manages a total of 125 Airports which includes :
                                            </p>
                                            <ul>
                                                <li>11 International Airports</li>
                                                <li>81 Domestic Airports</li>
                                                <li>8 Customs Airports</li>
                                                <li>25 Civil Enclaves at Defence Airfields</li>
                                            </ul>
                                            <p>
                                            <strong>Airports Authority of India </strong>(AAI) also provides Air Traffic Management Services (ATMS) over entire 
                                            Indian Air Space and adjoining oceanic areas with ground installations at all Airports and 25 other 
                                            locations to ensure safety of Aircraft operations.
                                            </p>
                                            <p>
                                                Some of the busiest airports in India are as follows : 
                                            </p>
                                            <ol>
                                                <li>Indira Ganghi International Airport, New Delhi</li>
                                                <li>Chhatrapati shivaji Maharaj International Airport, Mumbai</li>
                                                <li>Kempegowda International Airport, Bangalore</li>
                                                <li>Chennai International Airport, Channai</li>
                                                <li>Netaji Subhash Chandra Bose International Airport, Kolkata</li>
                                                <li>Rajiv Ganghi International Airport, Hyderabad</li>
                                            </ol>
                                        </div>
                                        {/*---------------------Right Side Image---------------------*/}
                                        <div className="fl w-50 pa3 tc Home-img">
                                            <img src="https://i.ibb.co/7XjhPMY/Img.png" alt="Map of India"></img>
                                        </div>
                                    </div>
                                    {/*---------------------Statistics---------------------*/}
                                    {/*---------------------Pie Chart---------------------*/}
                                      <div className="ml2 mr5">
                                          <p className="f3 pa3 ml3 mb3">Comparison among the top 6 busiest airport for year 2018-19 is as follows: </p>
                                          <div className="fl w-50 pa3 f4 Home-event">
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
                                                  data={data} 
                                                  //dataComponent={<Slice events={{ onClick: handleClick }}/>}
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
                                                  //sortKey="x"
                                                  //sortOrder="ascending"
                                                  endAngle={360}
                                                  startAngle={0}
                                                  width={400}
                                                  >
                                              </VictoryPie>
                                          </div>
                                          {/*---------------------Key---------------------*/}
                                          <div className="fl w-50 pa3 Home-key shadow-2">
                                              <p className="f3 b tc">Key</p>
                                              <div className="flex flex-column">
                                                <div className="w-100 pa3 mr2 Key-hover">
                                                  <a className="link black f4 " href="#" title="IGI Airport" onClick={()=>this.HandleClick('IGI') }>
                                                    <span className="Home-key-box Home-key-box-one"></span>: Indira Gandhi International Airport, New Delhi
                                                  </a>
                                                </div>
                                                <div className="w-100 pa3 mr2 Key-hover">
                                                  <a className="link black f4  " href="#" title="CSMI Airport" onClick={()=>this.HandleClick('CSMI') }>
                                                    <span className="Home-key-box Home-key-box-two"></span>: Chhatrapati Shivaji Maharaj International Airport
                                                  </a>
                                                </div>
                                                <div className="w-100 pa3 mr2 Key-hover">
                                                  <a className="link black f4 " href="#" title="NSBI Airport" onClick={()=>this.HandleClick('NSBI') }>
                                                    <span className="Home-key-box Home-key-box-three"></span>: Netaji Subhash Chandra Bose International Airport
                                                  </a>
                                                </div>
                                                <div className="w-100 pa3 mr2 Key-hover">
                                                  <a className="link black f4 " href="#" title="KI Airport" onClick={()=>this.HandleClick('KI') }>
                                                    <span className="Home-key-box Home-key-box-four"></span>: Kempegowda International Airport
                                                  </a>
                                                </div>
                                                <div className="w-100 pa3 mr2 Key-hover">
                                                  <a className="link black f4 " href="#" title="CI Airport" onClick={()=>this.HandleClick('CI') }>
                                                    <span className="Home-key-box Home-key-box-five"></span>: Channai International Airport
                                                  </a>
                                                </div>
                                                <div className="w-100 pa3 mr2 Key-hover">
                                                  <a className="link black f4 " href="#" title="RGI Airport" onClick={()=>this.HandleClick('RGI') }>
                                                    <span className="Home-key-box Home-key-box-six"></span>: Rajiv Gandhi International Airport
                                                  </a>
                                                </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
          }
          </div>
        </div>
      </div>
      {/*---------------------Footer--------------------- AAI links from main site */}
      <footer className="Footer pa3 shadow-2">
        <small className="f6 db tc white">© 2020 <b className="f5 ttu">Airport Authority of India</b>., All Rights Reserved</small>
        <div className="tc pa3">
          <a className="link white hover-silver dib h2 w2 ma3" href="https://www.facebook.com/AirportsAuthorityOfIndiaOfficial/" title="Facebook">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
          </a>
          <a className="link hover-silver white dib h2 w2 ma3" href="https://www.instagram.com/aaiofficial/" title="Instagram">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
          </a>
          <a className="link hover-silver white dib h2 w2 ma3" href="https://www.youtube.com/channel/UC5e_s_dQwicNt_V4xds3IYg" title="youtube">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
          </a>
          <a className="link hover-silver white dib h2 w2 ma3" href="https://twitter.com/AAI_Official" title="Twitter">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
          </a>
        </div>
        
      </footer>
      
    </div>
    )
  }
}

export default App
