import React from 'react';
import {createPortal} from 'react-dom';
import Backdrop from './Backdrop';
import Modalbox from './Modalbox';

function Portal({children,show}) {
  return (
    <>
      {createPortal(<Backdrop show={show} />, document.querySelector(".backdrop"))}
      {createPortal(<Modalbox children={children}></Modalbox>, document.querySelector(".modalbox"))}
    </>
  );
}

export default Portal;
