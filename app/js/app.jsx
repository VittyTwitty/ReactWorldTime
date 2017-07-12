import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



import Clocks from './components/Clocks'
import ClocksDescription from './components/ClocksDescription'

class App extends Component {
  render() {
    //console.log(store);
    const { clocks, clocksDescription } = this.props;
    console.log(this.props)
    return (
      <h3>
        <div className="clocks">         
          < Clocks 
            className="clocks_displays"
            timeInNow={clocks}
          />
          < ClocksDescription
            className="clocks_discription"
            country={clocksDescription}
          />
        </div>
      </h3>
    );
  }
}


// подключение реакта к редакс
export default connect(
  state => ({
    clocks: state.clocks,
    clocksDescription: state.clocksDescription
  }),
  dispatch => ({})
)(App);