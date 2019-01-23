import React, { Component } from 'react';
import { connect } from 'react-redux';
class Container extends Component {

    render() {

        let { state, nothing } = this.props;

        return (
          <div className="Container">
            Вывод из props <h2>{nothing}</h2>
          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'state': state,
        'nothing': state.mainReducer.nothing
    };

}

export default connect(mapStateToProps, null)(Container);