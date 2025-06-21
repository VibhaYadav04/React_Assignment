import State from "./component/State";
import UserProfile from "./component/UserProfile";

function App() {
  const user = {
    "name": "Vibha",
    "age": 25,
    "email": "vibha@gmail.com"
  }
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <UserProfile user={user}/>
      <State />
    </div>
  );
}

export default App;