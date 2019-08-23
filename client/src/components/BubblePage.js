import React, { useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { connect } from 'react-redux'
import { getColors } from '../actions'

const BubblePage = props => {
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() =>{
    props.getColors()
  },[])

  return (
    <div>
    Hello
      <ColorList />
      <Bubbles />
    </div>
  );
};

const mapStateToProps = state =>{
  return state 
}

export default connect(mapStateToProps, {getColors})(BubblePage)
