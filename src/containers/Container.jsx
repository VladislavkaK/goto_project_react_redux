import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../components/LeftMenu';
import TaskArea from '../components/TaskArea';
import loadTodoData from '../actions/loadTodoData';
import initCurrentFolder from '../actions/initCurrentFolder';

class Container extends Component {

    componentDidMount() {
        /* 
            3) Вызываем функцию init() после отправке данных в props
        */
        this.props.init();
    }

    render() {

        return (
          <div className="row Container">
                <LeftMenu  />

                <TaskArea  />
          </div>
        );

    }
}

export function mapStateToProps(state) {
// console.log(state)
    return {
        'state': state,
    };

}

export function mapDispatchToProps(dispatch) {
    
    return {
        /* 
            2) Вызываем импортированную функцию loadTodoData из actions/ 
            и прокидываем данные в props
        */
        init() {
            dispatch(loadTodoData())
                .then(() => { dispatch(initCurrentFolder()) })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);