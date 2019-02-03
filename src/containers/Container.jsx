import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../components/LeftMenu';
import TaskArea from '../components/TaskArea';
class Container extends Component {

    render() {

        return (
          <div className="row Container">
                <LeftMenu />

                <TaskArea />
          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'state': state,
    };

}

export default connect(mapStateToProps, null)(Container);