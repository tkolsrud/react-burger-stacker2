import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <p>{this.props.name}</p>
        )
    }
}

export default Ingredient