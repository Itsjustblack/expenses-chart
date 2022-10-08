import { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import logo from './images/logo.svg';
import values from "./data.json";
import './App.css';

const App = () => {
  const { Expenses } = values;
  const [days, setDays] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDays(Expenses.map(item => item.day));
    setData(Expenses.map(item => item.amount));
    setIsPending(false);
  }, []);
  
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
            {<BarChart days={days}  data={data}/>}  
          <div className="line"></div>
          <div className="footer">
            <div className='month'>
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
