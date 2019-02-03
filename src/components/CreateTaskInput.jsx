import React, { Component } from 'react';
import { connect } from 'react-redux';
class CreateTaskInput extends React.Component {

    render() {

        return (
            <input type="text" className="form-control mr-sm-2" placeholder="Название задачи..." />
        );
    }
}

export default connect(null, null)(CreateTaskInput);