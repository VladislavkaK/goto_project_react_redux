import React, { Component } from 'react';
import { connect } from 'react-redux';

class Task extends React.Component {

    render() {

        let { taskName } = this.props;

        return (

            <div>{taskName}</div>

        );

    }
}

export default connect(null, null)(Task);