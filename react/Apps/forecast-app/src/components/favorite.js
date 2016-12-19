import React from "react";
import _ from "lodash";

export default (props) => {

  return(
    <tr style={theader}>
        <th style={date}><span>{props.date}</span></th>
        <th style={image}><img src={props.picture}/></th>
        <th style={description}>{props.description}</th>
        <th style={temp}><span style={tempday}>{Number((props.daytemp).toFixed(0))}º</span><span style={tempnight}> / {Number((props.nighttemp).toFixed(0))}º</span></th>
        <th style={humidity}><span>{props.humidity} %</span></th>
        <th style={wind}><span>{props.speed} m/s</span></th>
    </tr>
  );
}
const humidity={
  width:'100px',
  verticalAlign:'middle',
  color:'#00afbe',
}
const wind={
  width:'100px',
  verticalAlign:'middle',
  color:'#00afbe',
}
const image={
  width:'100px',
  verticalAlign:'middle',

}
const theader = {
  BorderBottom: 'solid 1px #999999',
  verticalAlign:'middle',

}
const temp = {
  width:'100px',
  verticalAlign:'middle',
}
const date = {
  width:'160px',
  color:'#00afbe',
  fontWeight:'bold',
  verticalAlign:'middle',

}
const tempday = {
  color:'#DF7401',
  fontWeight:'bold',
  verticalAlign:'middle',

}
const tempnight = {
  color:'#848484',
  verticalAlign:'middle',

}
const description = {
  width:'120px',
  verticalAlign:'middle',
  color:'#00afbe',
  fontWeight:'bold',
  marginLeft:'10px',

}
