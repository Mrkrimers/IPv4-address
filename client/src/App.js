import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [data, setData] = useState('');

  async function getIp() {
    const res = await axios.get('https://api.ipify.org/?format=json')
    console.log(res);
    setData(res.data.ip)
  }

  useEffect(() => {
    getIp()
  })


  return (
    <div className="App">
      <h1>{data}</h1>
      <p>{data} ( This is your IP address...probably :P )</p>
    </div>
  );
}

export default App;
