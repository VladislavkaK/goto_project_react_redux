import React, { Component } from 'react';
import { connect } from 'react-redux';
class Folder extends React.Component {

    render() {

        let { menu } = this.props;
        
        let menuItems = menu.map((item,i) => {
            
            return (
                <li key={i} className={`list-group-item FolderList__Folder--${i}`}>
                    {item.name}
                </li>
            );
        });

        return <ul className="list-group">{menuItems}</ul>;

    }
}

export function mapStateToProps(state) {

    return {
        'menu': state.mainReducer.menu
    };

}

export default connect(mapStateToProps, null)(Folder);