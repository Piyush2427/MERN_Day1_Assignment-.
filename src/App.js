import logo from './logo.svg';
import './App.css';
import './practice.js';
import { useState } from 'react';
function ProfileCard({ devName }) {
  const [status, setStatus] = useState("Available");

  const A= ["React", "Node", "MongoDB"];

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>👨‍💻 Developer Profile</h2>

      <h3>Name: {devName}</h3>

      <p>Status: {status}</p>

      <button onClick={() => setStatus(status === "Available" ? "Busy" : "Available")}>
        Toggle Status
      </button>

      <h4>Skills:</h4>
      <ul>
        {A.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <div>
      <ProfileCard devName="Piyush Pandey" />
    </div>
  );
}


export default App;
