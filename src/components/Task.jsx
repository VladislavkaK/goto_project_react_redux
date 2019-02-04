import React, { Component } from 'react';
import { connect } from 'react-redux';
class Task extends React.Component {

    render() {

        let { tasks } = this.props;
        
        let items = tasks.map((item,i) => {
            
            return (
                <li key={i} className={`list-group-item form-check TaskList__Task TaskList__Task--${i}`}>
                   <input className="form-check-input" type="checkbox" id={`gridCheck1--${i}`} />
                   <label className="form-check-label" htmlFor={`gridCheck1--${i}`}>{item.title}</label>
                </li>
                
            );
        });

        return <ul className="list-group">{items}</ul>;

    }
}

export function mapStateToProps(state) {

    return {
        'tasks': state.mainReducer.tasks
    };

}

export default connect(mapStateToProps, null)(Task);