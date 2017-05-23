import React, { Component } from 'react';
import {connect} from 'react-redux';

class World extends Component {
    render () {
        return (
            <div>
                {this.props.cells[0][0].age}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cells: state.cells
    }
}


export default connect(mapStateToProps)(World)
