import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../components/LeftMenu';
import TaskArea from '../components/TaskArea';
import loadTodoData from '../actions/loadTodoData';

class Container extends Component {

    componentDidMount() {
        //вызывает init из mapDispatchToProps
        this.props.init();
    }

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

export function mapDispatchToProps(dispatch) {
    
    return {
      init() {
        dispatch(loadTodoData());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);