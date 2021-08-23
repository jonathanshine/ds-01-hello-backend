import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const moduleData = await(await fetch('http://localhost:5000/json')).json();
      setModules(moduleData);
    }
    getData();
  }, []);

  console.log(modules);

  return (
    <div className="App">
      <h1>First Day of Backend</h1>
      <h2>Modules:</h2>
      <ul>
        {modules.map(module => <li>{module}</li>)}
      </ul>
    </div>
  );
}

export default App;
