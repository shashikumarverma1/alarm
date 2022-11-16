import "./App.css";
import React, { useState } from "react";

function App() {

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [should_Ring, setshould_Ring] = useState(false)
  const [alarm, setalarm] = useState([]);
  const [time, settime] = useState(0);
  const [day, setday] = useState(0);
  const [month, setmonth] = useState(0);
  const [date, setdate] = useState(0);
  const [h, seth] = useState(0);
  const [min, setmin] = useState(0);
 
  setInterval(() => {
    let date = new Date();
    let date1 = date.toLocaleTimeString();
    let time_to_ring=date1.slice(0,5)
    console.log(time_to_ring)
    let date2 = date.getDay();
    let date3 = date.getMonth();
    let date4 = date.getDate();
    settime(date1);
    setday(date2);
    setmonth(date3);
    setdate(date4);
    ring(alarm,time_to_ring)
   
   
  }, 1000);
 const Delete=(e,j)=>{
  // console.log(e,j)
  let A=[...alarm]
  for(let i=0;i<A.length;i++){
    if(i==j){
      A.splice(i,1)
      
    }
  }
  setalarm(A)
 }
 const close_alarm=()=>{
  setshould_Ring(false)
 }
function ring(alarm ,time_to_ring){
  // console.log(5)
  var current_time=0
//  setshould_Ring(false)
  for(let i=0;i<alarm.length;i++){
    let alarm_time=`${alarm[i].h}:${alarm[i].min}`;
    if(alarm_time==time_to_ring){
      current_time +=alarm_time
     setshould_Ring(true)
     return
    
     
    }
   
    
 
 }
 
setshould_Ring(false)
}

  return (
    <div className="App">
      <div className="p-1">
        {time} - {date} {months[month]} : {weekday[day]}
      </div>
      
      <div className="p-1">
        <input
          type="text"
          placeholder="set time in hour"
          onChange={(e) => {
            seth(e.target.value);
          }}
        />
        <input className="m-1"
          type="text"
          placeholder="set time in minuts"
          onChange={(e) => {
            setmin(e.target.value);
          }}
        />
        <button className="m-1 btn"
          onClick={() => {
            let alm = {
              'h': h,
              'min': min,
            };
            setalarm([...alarm, alm]);
            //  alarm.length=0
            // console.log(alarm);
          }}
        >
         <b> set alarm</b>
        </button>
        <button className="m-1 btn"
          onClick={() => {
            setalarm([]);
          }}
        >
         <b> clear all alarm</b>
        </button>
        
      </div>
        <div>
          
          {
            // console.log(ring)
            should_Ring  ? <audio controls autoPlay style={{display:'non'}}>
               <source src='/public/ring.mp3'/></audio> :""
          }
        </div>
     
     
      {
      
       alarm.map((e,i)=>{
        return (
          <div key={i} className='justify_content_space_between'>
           <b>  {e.h}:{e.min}  <select> <option>am</option> <option>pm</option> </select> </b>
           <button onClick={()=>{Delete(e,i)}} className='delete'>Delete</button>
          </div>
        )
       })
      }
    </div>
  );
}

export default App;
