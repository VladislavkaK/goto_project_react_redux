import React, { Component } from 'react';
import { connect } from 'react-redux';
import FolderList from '../containers/FolderList';
import { MDBBtn } from "mdbreact";
class LeftMenu extends Component {

    render() {

        return (
          <div className="LeftMenu col-4">
                <FolderList />

                <MDBBtn className="btn-default" outline color="info">Добавить категорию</MDBBtn>
               
          </div>
        );

    }
}

export default LeftMenu;