import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task';

class TaskList extends Component {

    render() {
      let { currentTask } = this.props;

      return (
        <ul className="list-group">
      
            {currentTask.map((name, index) => {

                return (
                      
                      <li key={index} className={`list-group-item form-check TaskList__Task TaskList__Task--${index}`}>
                        <input className="form-check-input" type="checkbox" id={`gridCheck1--${index}`} />
                        <label className="form-check-label" htmlFor={`gridCheck1--${index}`}>
                          <Task taskName={name.title}  />
                        </label>
                      </li>
                  )
                
            })}
        </ul>
      );
    }
}

// Селектор, возвращает название задачи
function getFolder(state, currentFolder) {
  let newTasks = state.todo.tasks;
  let { tasks } = state.mainReducer;
  let allTasks = Object.assign(newTasks, tasks);

  let folder = allTasks.filter((name, index) => {
      return name.folder === currentFolder;
  })
  
  return folder;
}

export function mapStateToProps(state) {

  return {
      'tasks': state.mainReducer.tasks,
      'currentTask': getFolder(state, state.ui.currentFolder),
      // 'newTasks': state.todo.tasks 
  };

}

export default connect(mapStateToProps, null)(TaskList);