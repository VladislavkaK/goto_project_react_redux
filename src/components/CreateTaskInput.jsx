import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_TASK } from '../constants/index';

class CreateTaskInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: '' };
    }

    handleSubmit = ((e) => {
        e.preventDefault();
        let { currentFolder } = this.props;
        let title = e.target[0].value;

        if (title && currentFolder) {
            this.addTask(title, currentFolder);

            //после каждого добавления задачи обнулять поле
            this.setState({ task: '' });
        }
    })

    addTask = ((titleTask, nameFolder) => {
        
        this.props.addTask(titleTask, nameFolder)

    });

    render() {
//TODO: что не так?
        return (
            <form className="form-inline" onSubmit={this.handleSubmit} >
                <input type="text" 
                    className="form-control mr-sm-2" 
                    placeholder="Введите задачу..." 
                />
            </form>
        );
    }
    
}

export function masStateToProps(state) {
    
    return {
        'currentFolder': state.ui.currentFolder
    }
}

export function mapDispatchToProps(dispatch) {

    return {
        addTask(titleTask, nameFolder) {
            dispatch({type: ADD_TASK, payload: { title: titleTask, folderName: nameFolder }});

        }
    }

}

export default connect(masStateToProps, mapDispatchToProps)(CreateTaskInput);