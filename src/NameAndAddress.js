import React from "react";

function NameAndAddress({ name, email, show, link }) {
  if (show) {
    return (
      <div className="nameAndAddress">
        <p>Nimi: {name}</p>
        <p>Sähköposti: {email}</p>
        <a href={link}>LinkedIn</a>
      </div>
    );
  } else {
    return <div />;
  }
}

export default NameAndAddress;
