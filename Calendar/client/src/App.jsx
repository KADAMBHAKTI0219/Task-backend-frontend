import { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [monthString, setmonthString] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date) {
      const selectedDate = new Date(date);
      setDate(selectedDate.getDate())
      setMonth(selectedDate.getMonth() + 1); // Adjust for 0-based index
      setYear(selectedDate.getFullYear());
      setmonthString(selectedDate.toLocaleString('default', { month: 'long' }))
    }
  };


  return (
    <>
      <h1 class="w-46">Calendar</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" onChange={(e) => setDate(e.target.value)} style={{padding:"10px 20px" ,display:"block",margin:"10px 20px"}} />
        <input type="submit" value="Get Date Info" style={{padding:"10px 20px" ,display:"block"}} />
      </form>
      <p style={{fontSize:"30px"}}>{`${date} - ${month} - ${year}`}</p>
      <p style={{fontSize:"30px"}}>{`${date} - ${monthString} - ${year}`}</p>
    </>
  );
}

export default App;
