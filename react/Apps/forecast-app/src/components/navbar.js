import React from 'react';
import SearchBar from '../containers/search_bar';
import {Link} from 'react-router';

export default class Navbar extends React.Component{
  render(){
    return(
      <nav style={navbar} className="navbar navbar-default">
        <div className="container-fluid">
          <Link to='/home'><div style={logo} className="navbar-header">
            <i className="glyphicon glyphicon-cloud"></i>ReactWeather</div>
          </Link>
          <div style={input}>
              <div>
                <SearchBar />
              </div>
          </div>
        </div>
      </nav>

    );
  }
}
const navbar = {
  height:'60px',
  fontSize:'210%'
}
const logo={
  width:'250px',
  marginLeft:'3%',
  marginTop:'1%',
}
const input = {
width:'70%',
marginTop:'1%',
}
