import React from "react";

function NameAndAddress({ name, email }) {
  return (
    <div className="nameAndAddress">
      <p>Nimi: {name}</p>
      <p>Sähköposti: {email}</p>
      <a href="https://www.linkedin.com/in/tiina-partanen-2078852/">LinkedIn</a>
    </div>
  );
}

export default NameAndAddress;
