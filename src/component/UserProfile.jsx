import User from "./User";
const UserProfile = ({user}) => {
  return (
    <div style={{border:"2px solid black", padding: "7px", marginRight: "25px", marginLeft:"300px"}}>
      <h1>UserProfile:</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <User email={user.email} age={user.age} />
    </div>
  );
};

export default UserProfile;