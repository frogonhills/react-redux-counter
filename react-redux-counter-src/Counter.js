import React from 'react';
import {connect} from 'react-redux';
import {INCREASE , DECREASE , RESET} from  './components/actions';
function Counter(props) {

  console.log(props)
  
  const [count , setCount] = React.useState(0);
    
  return(
    <div className = "container">
      <h1>count</h1>
      <h2>{props.name}</h2>
      <p className = "counter" >{props.count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={()=> props.dispatch({type:DECREASE})} >Decrease</button>
        <button type="button" className="btn" onClick={()=>  props.dispatch({type:RESET})} >reset</button>
        <button type="button" className="btn" onClick={()=>  props.dispatch({type:INCREASE})} >increase</button>

      </div>
    </div>
  )
}

function mapStateToProps(state){
  console.log("chek" , state)
  return{count: state.count , name: state.name}
}

export default connect(mapStateToProps)(Counter);
