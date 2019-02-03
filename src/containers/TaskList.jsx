import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';

class TaskList extends Component {

    render() {

        return (
          <div className="TaskArea__TaskList">
                <Task />
          </div>
        );

    }
}

export default TaskList;