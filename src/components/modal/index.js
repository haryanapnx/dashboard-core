import React from 'react';
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {modalToggle} from '../../stores/actions/modalsAction';

class ModalContaiiner extends React.Component {

  toggle=()=> {
    this.props.dispatch(modalToggle(!this.props.isOpen))
  }

  render() {
    const { isOpen, body, title } = this.props
    
    return (
      <div>
        <Modal isOpen={isOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
           {body}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
  body: state.modal.body
})

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContaiiner);