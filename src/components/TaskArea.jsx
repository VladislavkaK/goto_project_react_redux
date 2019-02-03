import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from '../containers/TaskList';
import CreateTaskInput from '../components/CreateTaskInput';
class TaskArea extends Component {

    render() {

        return (
          <div className="TaskArea col-6">
                <CreateTaskInput />
                <TaskList />
          </div>
        );

    }
}

export default TaskArea;