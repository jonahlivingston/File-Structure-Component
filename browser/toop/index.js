import React from 'react';
import { connect } from 'react-redux';
import { increment } from "./HomeActionCreators";

export const Home = (props) => {
return(
    <div>
        <h1>{props.count||"loading"}</h1>
        <button onClick={() => {props.increment()}}>Increment</button>
    </div>
)
}

const mapStateToProps = (state) => ({
    count: state.home
})

const mapDispatchToProps = (dispatch) => ({
    increment(){
        console.log("temp")
        dispatch(increment())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)