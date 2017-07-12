import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeInNow: moment(),
            type: 'ADD_TIME'
        }

    }

    componentDidMount() {
        setInterval(() => {
            this.state.timeInNow = moment();
            this.setState({
                timeInNow: this.state.timeInNow
            })


        }, 1000);
    }
    render() {

        const timeInNow = this.props.timeInNow;
        console.log(timeInNow)

        return (
            <div>
                <ul>
                    {timeInNow.map((elem, i) =>
                        <li key={i}>{this.state.timeInNow.tz(elem).format(this.props.format)}</li>
                    )}
                </ul>
            </div>
        )
    }
}

Clocks.defaultProps = {
    format: 'HH:mm:ss'
};
Clocks.propTypes = {
    timeInNow: PropTypes.array.isRequired
}