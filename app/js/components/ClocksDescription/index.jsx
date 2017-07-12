import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClocksDescription extends Component {
    render() {

        const country = this.props.country;
        return (
            <div>
                <ul>
                {country.map((elem, i) =>
                    <li key={i}>{elem}</li>
                )}
                </ul> 
            </div>
        )
    }
}

ClocksDescription.propTypes = {
    country: PropTypes.array.isRequired
}



