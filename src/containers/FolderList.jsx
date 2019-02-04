import React, {Component} from 'react';
import {connect} from 'react-redux';
import Folder from '../components/Folder';

class FolderList extends Component {

    render() {

        return (
            <div className="FolderList">
                <ul className="list-group">
                    {this.props.folders.map((name, index) => {
                        let selected = false;
                        if (name === this.props.currentFolder) {
                            selected = true;
                        }

                         return (
                            <li key={index} className={`list-group-item FolderList__Folder--${index}`}>
                                <Folder
                                    selected={selected}
                                    folderName={name}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'folders': state.mainReducer.folders,
        'currentFolder': state.ui.currentFolder
    };

}

export default connect(mapStateToProps, null)(FolderList);