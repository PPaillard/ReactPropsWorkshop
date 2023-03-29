import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const bart = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
  };

  const homer = {
    image:
      "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson",
  };
  return (
    <div className="App">
      <Avatar
        firstname={bart.firstName}
        lastname={bart.lastName}
        image={bart.image}
      />
      <Avatar
        firstname={homer.firstName}
        lastname={homer.lastName}
        image={homer.image}
      />
    </div>
  );
}

export default App;
