// Modal.js
import React from "react";

const Modal = ({
  isOpen,
  onClose,
  image,
  projectName,
  description,
  technology,
}) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return <div className=""></div>;
};

export default Modal;
