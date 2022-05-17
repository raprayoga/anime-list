import React from 'react'

export default function CustomArrow(props) {
  const { className, style, onClick } = props;
  
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:'black', background: "#7a797996" }}
      onClick={onClick}
    />
  );
}
