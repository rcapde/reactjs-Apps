import React from 'react'
import { connect } from 'react-redux';
import { fetchRelated } from '../actions/index';
import { bindActionCreators } from 'redux';

class Related extends React.Component{
  componentWillMount(){
    fetchRelated()
  }
  render(){
    console.log(this.props.related);
    return(
      <div>Related Cities!</div>
    );
  }
}
// export default function Related (props){
//     return(
//       <div>
//         <h1>Related Cities!</h1>
//         <li>{props.lon},{props.lat}</li>
//       </div>
//     );
// }
function mapStateToProps(state) {
  return { related: state.related.data };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRelated }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Related);
