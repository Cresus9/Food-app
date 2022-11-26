import React, {Fragment} from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'


const Backdrop = props =>{
    return <div  onClick={props.hideHandler} className='backdrop' />

};
const ModalOverlay = props =>{
    return<div className='modal'>
        <div className='content'>{props.children}</div>
    </div>

};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {

  return (
    <Fragment>
        <Backdrop hideHandler={props.hideHandler}/>
        <ModalOverlay />
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
};
