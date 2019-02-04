import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SET_CURRENT_FOLDER} from "../constants";

class Folder extends React.Component {

    handleSelected = () => {
        let { folderName } = this.props;
        this.props.handleSelected(folderName);
    }

    render() {

        let {folderName, selected} = this.props;
        let className = 'Folder';

        if (selected === true) {
            className += ' selected';
        }

        return (

            <div onClick={this.handleSelected} className={className}>{folderName}</div>

        );


    }
}

export function mapDispatchToProps(dispatch) {
    return {
        handleSelected(folderName) {
            dispatch({type: SET_CURRENT_FOLDER, payload: { folderName }});
        }
    }
}

export default connect(null, mapDispatchToProps)(Folder);