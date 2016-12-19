import React from "react";
import SecondBar from "../components/second_bar";
import SearchBar from "../containers/search_bar";

export default class Home extends React.Component{
  render(){
    return(
        <div style={content}>
          <div>
            <div style={title}>ReactWeather App</div>
            <div style={text}>Get the Accurate Weather Conditions for your desired city. Using one of the fastest tecnologies, to get instant access to the data. </div>
            <div style={as}>
              <SearchBar />
            </div>
          </div>
        </div>
    );
  }
}

//STYLEES!!!!!!!!!!

const content={
  textAlign:'center',
  fontSize:'1.6em',
  height:'630px',
  color:'black',
  backgroundColor:'transparent',
  opacity:'0,9',
  width:'100%',
  borderRadius:'7px',
}
const title = {
  fontSize:'2.2em',
  marginTop:'100px',
}
const text = {
  paddingTop:'30px',
  marginLeft:'10%',
  width:'80%',
}
const as = {
  width:'400px',
  marginLeft:'25%',
  paddingTop: '60px',
}
