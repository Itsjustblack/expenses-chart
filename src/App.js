import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import BarChart from './components/BarChart';
import logo from './images/logo.svg';
import './App.css';

const App = () => {
  const { days, data, isPending } = useFetch('http://localhost:8000/Expenses');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    data ? setTotal(data.reduce((a,b) => a + b)) : setTotal(0)
  }, [data]);


  
  return(
    <div className="app">
      <div className="container">
        <header>
          <div className="title">
            <span>My Balance</span>
            <h1 className="total">{"$"+total}</h1>
          </div>
            <img src={logo} alt="Logo" />
        </header>
        <main>
          <h2>Spending - Last 7 Days</h2>
            {/* {isPending && <div>...Loading...</div>} Change to Loading Circle */}
            {/* {<BarChart days={days}  data={data}/>}   */}
          <div className="line"></div>
          <div className="footer">
            <div>
              <p>Total this Month</p>
              <h3>{"$" + total}</h3>
            </div>
            <div className="lastmonth">
              <h4>+2.4%</h4>
              <p>from last month</p>
            </div>
          </div>
        </main>
        <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge"
          >Frontend Mentor</a
        >. Coded by <a href="#">Your Name Here</a>.
      </div>
      </div>
    </div>
  )
}
export default App;
