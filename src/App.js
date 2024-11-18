import './App.css';
import axios from 'axios';
import {useState} from 'react';
import './App.css';
function App() {
  const [formdata,setformdata]=useState({
    price:"",
    age:"",
    months:"",
    owners:"",
    odo_reading:"",
    city:"1",
    fuel:"Petrol",
    transmission:"Automatic",
    category:"Yes"
  });
  const [formresp,setformresp]=useState(null);
  const handlechange=(r)=>{
    setformdata({...formdata,[r.target.name]:r.target.value});
  }
  const handlesubmit=async (e)=>{
    e.preventDefault();
    try{
      const response= await axios.post('/final-value',formdata);
      setformresp(response.data.final_value);
    }
    catch(error){
console.error(error);
    }
  }
  return (
    <div className='cont'>
      <center><h3>Auto-Valuation</h3></center>
    <div className='formc'>
    <form onSubmit={handlesubmit}>
      <label>Vehicle Price:</label><br/><input type="number" name="price" value={formdata.price} onChange={handlechange}/><br/>
        <label>Vehicle Age:</label><br/><input type="number" name="age" value={formdata.age} onChange={handlechange} required/><br/>
        <label>Insurance Period (Months):</label><br/><input type="number" name="months" value={formdata.months} onChange={handlechange} required/><br/>
        <label>Number of Owner:</label><br/><input type="text" name="owners" value={formdata.owners} onChange={handlechange} required/><br/>
        <label>Odometer Reading:</label><br/><input type="number" name="odo_reading" value={formdata.odo_reading} onChange={handlechange} required/><br/>
        <label>City:</label><select name="city" value={formdata.city} onChange={handlechange}>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select><br/>
        <label>Fuel:</label><select name="fuel" value={formdata.fuel} onChange={handlechange}>
            <option value="Petrol" >Petrol</option>
            <option value="Diesel">Diesel</option>
        </select><br/>
        <label>Transmission:</label><select name="transmission" value={formdata.transmission} onChange={handlechange}>
            <option value="Automatic" >Automatic</option>
            <option value="Manual">Manual</option>
        </select><br/>
        <label>Category:</label><select name="category" value={formdata.category} onChange={handlechange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
        </select><br/>
        <button type="submit" id="btn">Submit</button>
    </form>
     </div> {formresp !== null && (
        <div><center><h4>Final Value: {formresp}</h4></center></div>
      )}</div>
  );
}
export default App;
