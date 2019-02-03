import React, { Component } from 'react';
import { connect } from 'react-redux';
class Folder extends React.Component {

    render() {

        let { folders } = this.props;
        
        let menuItems = folders.map((item,i) => {
            
            return (
                <li key={i} className={`list-group-item FolderList__Folder--${i}`}>
                    {item}
                </li>
            );
        });

        return <ul className="list-group">{menuItems}</ul>;

    }
}

export function mapStateToProps(state) {

    return {
        'folders': state.mainReducer.folders
    };

}

export default connect(mapStateToProps, null)(Folder);