import React, { Component } from 'react';
import { connect } from 'react-redux';
import Folder from '../components/Folder';

class FolderList extends Component {

    render() {

        return (
          <div className="FolderList">
                <Folder />
          </div>
        );

    }
}

export default FolderList;