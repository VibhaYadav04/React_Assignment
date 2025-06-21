import React from "react";

const User = ({ email, age }) => {
  return (
    <div>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Age: </strong>{age}</p>
    </div>
  );
};

export default User;