
import style from "./maincompo.module.css"
import { useState, useEffect } from 'react';
import CurrentBatch from './CurrentBatch';
import UpcomingBatch from './UpcomingBatch';
import CompletedBatch from './CompletedBatch';

const Batch_data = [
  // Current Batches
  { head: "Frontend/Nitin/23 Sep", course: "MERN STACK", name: "Nitin Bela", date: "2024-09-23 To 2024-12-31", startDate: "2024-09-23", endDate: "2024-12-31", time: "10:00 AM - 12:00 PM" },
  { head: "Backend/Bahadur/15 Oct", course: "Node.js", name: "Bahadur ji", date: "2024-10-15 To 2025-01-15", startDate: "2024-10-15", endDate: "2025-01-15", time: "1:00 PM - 3:00 PM" },

  // Upcoming Batches
  { head: "Frontend/Nitin/04 Mar", course: "MERN STACK", name: "Nitin Sharma", date: "2025-03-04 To 2025-05-11", startDate: "2025-03-04", endDate: "2025-05-11", time: "2:00 PM - 4:00 PM" },
  { head: "Backend/Lisa/15 Apr", course: "Digital Marketing", name: "Lisa", date: "2025-04-15 To 2025-05-25", startDate: "2025-04-15", endDate: "2025-05-25", time: "4:00 PM - 6:00 PM" },

  // Completed Batches
  { head: "JavaScript/John/15 Aug", course: "JavaScript Basics", name: "John Doe", date: "2023-06-01 To 2023-08-15", startDate: "2023-06-01", endDate: "2023-08-15", time: "11:00 AM - 1:00 PM" },
  { head: "Python/laila/01 Jul", course: "Python for Beginners", name: "laila", date: "2023-05-01 To 2023-07-01", startDate: "2023-05-01", endDate: "2023-07-01", time: "9:00 AM - 11:00 AM" },
   // Current Batches
   { head: "Frontend/Akash/23 Sep", course: "MERN STACK", name: "Akash Madaan", date: "2024-09-23 To 2024-12-31", startDate: "2024-09-23", endDate: "2024-12-31", time: "10:00 AM - 12:00 PM" },
   { head: "Backend/George/15 Oct", course: "Node.js", name: "George", date: "2024-10-15 To 2025-01-15", startDate: "2024-10-15", endDate: "2025-01-15", time: "1:00 PM - 3:00 PM" },
 
   // Upcoming Batches
   { head: "Frontend/Nitin/04 Mar", course: "MERN STACK", name: "Nitin Sharma", date: "2025-03-04 To 2025-05-11", startDate: "2025-03-04", endDate: "2025-05-11", time: "2:00 PM - 4:00 PM" },
   { head: "Marketing/Anne/15 Apr", course: "Digital Marketing", name: "Anne Doe", date: "2025-04-15 To 2025-05-25", startDate: "2025-04-15", endDate: "2025-05-25", time: "4:00 PM - 6:00 PM" },
 
   // Completed Batches
   { head: "JavaScript/John/15 Aug", course: "JavaScript Basics", name: "John Doe", date: "2023-06-01 To 2023-08-15", startDate: "2023-06-01", endDate: "2023-08-15", time: "11:00 AM - 1:00 PM" },
   { head: "Python/Jane/01 Jul", course: "Python for Beginners", name: "Jane Smith", date: "2023-05-01 To 2023-07-01", startDate: "2023-05-01", endDate: "2023-07-01", time: "9:00 AM - 11:00 AM" },
    // Current Batches
  { head: "Frontend/Nitin/23 Sep", course: "MERN STACK", name: "Nitin Bela", date: "2024-09-23 To 2024-12-31", startDate: "2024-09-23", endDate: "2024-12-31", time: "10:00 AM - 12:00 PM" },
  { head: "Backend/Sam/15 Oct", course: "Node.js", name: "Sam Smith", date: "2024-10-15 To 2025-01-15", startDate: "2024-10-15", endDate: "2025-01-15", time: "1:00 PM - 3:00 PM" },

  // Upcoming Batches
  { head: "Frontend/Nitin/04 Mar", course: "MERN STACK", name: "Nitin Sharma", date: "2025-03-04 To 2025-05-11", startDate: "2025-03-04", endDate: "2025-05-11", time: "2:00 PM - 4:00 PM" },
  { head: "Marketing/Anne/15 Apr", course: "Digital Marketing", name: "Anne Doe", date: "2025-04-15 To 2025-05-25", startDate: "2025-04-15", endDate: "2025-05-25", time: "4:00 PM - 6:00 PM" },

  // Completed Batches
  { head: "JavaScript/John/15 Aug", course: "JavaScript Basics", name: "John Doe", date: "2023-06-01 To 2023-08-15", startDate: "2023-06-01", endDate: "2023-08-15", time: "11:00 AM - 1:00 PM" },
  { head: "Python/Jane/01 Jul", course: "Python for Beginners", name: "Jane Smith", date: "2023-05-01 To 2023-07-01", startDate: "2023-05-01", endDate: "2023-07-01", time: "9:00 AM - 11:00 AM" },
];



function Batch() {
  const [component, setComponent] = useState(1); // Track which component to display
  const [colorvar, setcolorvar] = useState(1);
  const [filteredBatches, setFilteredBatches] = useState([]); // Store the filtered batches

  useEffect(() => {
    Loader(1); // Load current batches on mount
  }, []);

  // Function to load the relevant batches
  function Loader(a) {
    setComponent(a); // Set the current component
    
    let colorvar=a;
    setcolorvar(colorvar);

    const currentDate = new Date();
    console.log("Current Date:", currentDate); // Log current date for debugging

    if (a === 1) {
      // Filter current batches
      const currentBatches = filter.filter(batch => {
        const start = new Date(batch.startDate);
        const end = new Date(batch.endDate);
        console.log("Checking current batch:", batch.head, start, end); // Log batch date details
        return start <= currentDate && end >= currentDate;
      });
      console.log("Current Batches:", currentBatches); // Log filtered batches
      setFilteredBatches(currentBatches);
    } else if (a === 2) {
      // Filter upcoming batches
      const upcomingBatches = filter.filter(batch => {
        const start = new Date(batch.startDate);
        console.log("Checking upcoming batch:", batch.head, start); // Log batch date details
        return start > currentDate;
      });
      console.log("Upcoming Batches:", upcomingBatches); // Log filtered batches
      setFilteredBatches(upcomingBatches);
    } else if (a === 3) {
      // Filter completed batches
      const completedBatches = filter.filter(batch => {
        const end = new Date(batch.endDate);
        console.log("Checking completed batch:", batch.head, end); // Log batch date details
        return end < currentDate;
      });
      console.log("Completed Batches:", completedBatches); // Log filtered batches
      setFilteredBatches(completedBatches);
    }
  }

  const [input,setinput]=useState("");
  const[filter,setfilter]=useState(Batch_data);
  let main_value=input.toLowerCase();
  
  function searcher(){
      let Card=Batch_data.filter((cart)=>{
          let Keys=Object.keys(cart);
          for(let i=0;i<Keys.length;i++){
              let keyarr=Keys[i];
              if(String(cart[keyarr]).toLowerCase().includes(main_value)===true){
                  return cart;
              }
          }
      })
      setfilter(Card);
  }
  useEffect(()=>{
      searcher();
  },[input]);

    
  return (
    <>

    <div className={style.rightcompo}>
    {/* <div className='w-11/12 h-lvh ml-6 bg-white border border-slate-300 '> */}
          {/* <div className='border border-black rounded-full'> */}
          <input className='rounded-full mt-6 ml-4 leading-8 pl-4 ' placeholder='Enter Here...' 
            value={input} 
            onChange={(e)=> setinput(e.target.value)}
          /> 
          <i onClick={searcher} class="fa-solid fa-magnifying-glass"></i>
          {/* </div> */}


          <div className='flex'>
              
              <div onClick={()=>Loader(1)} className= {colorvar===1 ? 'w-32 pl-4 rounded-md mt-6 ml-4 bg-blue-950 text-white border border-blue-950' :'w-32 pl-4 rounded-md mt-6 ml-4 hover:bg-blue-950 hover:text-white border border-blue-950'}><i class="fa-solid fa-calendar-days"></i> Current</div>
              <div onClick={()=>Loader(2)} className={colorvar===2 ? 'w-32 pl-4 rounded-md mt-6 ml-4 bg-blue-950 text-white border border-blue-950' :'w-32 pl-4 rounded-md mt-6 ml-4 hover:bg-blue-950 hover:text-white border border-blue-950'}><i class="fa-solid fa-calendar-days"></i> Upcoming</div>
              <div onClick={()=>Loader(3)} className={colorvar===3 ? 'w-32 pl-4 rounded-md mt-6 ml-4 bg-blue-950 text-white border border-blue-950' :'w-32 pl-4 rounded-md mt-6 ml-4 hover:bg-blue-950 hover:text-white border border-blue-950'}><i class="fa-solid fa-calendar-days"></i> Completed</div>
          </div>


          <div>
          {/* Render the appropriate component based on the value of 'component' */}
          {component === 1 && <CurrentBatch batches={filteredBatches} />}
          {component === 2 && <UpcomingBatch batches={filteredBatches} />}
          {component === 3 && <CompletedBatch batches={filteredBatches} />}
        </div>
           
        </div>

        
    </>
  )
}

export default Batch;