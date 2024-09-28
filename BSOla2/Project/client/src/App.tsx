import { useEffect, useState } from "react";
import { getAllWarehousesAPI, getAllJobsAPI, addJobAPI } from "./api/entities";
import { Job, Warehouse } from "./types/types";
import { addJob } from "./utils/addJob";
import "./App.css";

const App = () => {
  const [warehouses, setWarehouses] = useState<Warehouse[]>();
  const [jobs, setJobs] = useState<Job[]>();
  const [chemicalsAmount, setChemicalsAmount] = useState<number>(0);
  const [incoming, setIncoming] = useState<boolean>(true);
  const [warehouseNumber, setWarehouseNumber] = useState<number>(1);

  const fetchData = async () => {
    try {
      const jobs = await getAllJobsAPI();
      console.log("Jobs:", jobs);
      setJobs(jobs);
      const warehouses = await getAllWarehousesAPI();
      console.log("Warehouses:", warehouses);
      setWarehouses(warehouses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAddJob = async () => {
    try {
      const newJob: Job = {
        chemicalsAmount: chemicalsAmount,
        incoming: false,
        warehouseNumber: warehouseNumber,
      };
      await addJob(newJob);
      setChemicalsAmount(0);
      setIncoming(true);
      setWarehouseNumber(0);
      await fetchData();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(warehouses);

  
  

  // async function handleButtonClick(id: string | undefined): Promise<void> {
  //   if (!id) return;
  //   try {
  //     await deleteTask(id);
  //     console.log("Task deleted:", id);
  //     await fetchTasks();
  //   } catch (error) {
  //     console.error("Error deleting task:", error);
  //   }
  // }

  // async function handleCompleteTask(
  //   id: string | undefined,
  //   isCompleted: boolean | undefined
  // ): Promise<void> {
  //   if (!id || typeof isCompleted !== "boolean") return;
  //   try {
  //     await completedTask(id, isCompleted);
  //     console.log("Task completed/uncompleted:", id);
  //     await fetchTasks();
  //   } catch (error) {
  //     console.error("Error deleting task:", error);
  //   }
  // }

   const handleToggle = () => {
    setIncoming(!incoming);
  };
 
  return (
  <div className="App">
    <div className="warehouse-cards-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
  {warehouses?.map((warehouse) => (
    <div
      key={warehouse.id}
      className="warehouse-card"
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '250px',
        textAlign: 'center'
      }}
    >
      <h3>Warehouse {warehouse.warehouseNumber}</h3>
      <p><strong>Storage:</strong></p>
      <p>{warehouse.currentStorage}/{warehouse.maximumStorage} units</p>
    </div>
  ))}
</div>

    <div style={{display: 'flex', gap: '64px'}}>
      <div className="container" style={{ backgroundColor: "aliceblue", borderRadius: "10px" }}>
        <div className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>

          <label style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '16px' }}>Chemicals:</label>
          <input
            type="number"
            placeholder="Amount of chemicals"
            value={chemicalsAmount}
            onChange={(e) => setChemicalsAmount(Number(e.target.value))}
            className="input-field"
            style={{ marginBottom: "20px", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          </div>


          <div style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
            <label style={{ fontWeight: 'bold', marginRight: "10px" }}>Warehouse Number:</label>
            <input
              type="number"
              placeholder="Warehouse number"
              value={warehouseNumber}
              onChange={(e) => setWarehouseNumber(Number(e.target.value))}
              className="input-field"
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
            <p style={{ fontWeight: 'bold' }}> {incoming ? 'Incoming' : 'Outgoing'}</p>
            <label className="switch" style={{ marginRight: "10px" }}>
              <input type="checkbox" checked={incoming} onChange={handleToggle} />
              <span className="slider" />
            </label>
          </div>

          <button
            style={{ backgroundColor: "lightgreen", borderRadius: "8px", padding: "10px 20px", fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
            className="add-task-button"
            onClick={handleAddJob}
          >
            Check Ticket
          </button>

        </div>
      </div>
      <div>
      <div className="jobs-elevator" style={{ maxHeight: '400px', overflowY: 'auto', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
      {jobs?.slice().sort((a, b) => b.warehouseNumber - a.warehouseNumber).map((job) => (    
      <div
      key={job.id}
      className="container"
      style={{
        backgroundColor: "aliceblue",
        borderRadius: "10px",
        marginBottom: "15px",
      }}
    >
      <div style={{ marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <label style={{ marginBottom: "10px", fontWeight: 'bold', fontSize: '16px' }}>Amount of units:</label>
          {job.chemicalsAmount}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "20px" }}>
          <label style={{ fontWeight: 'bold', marginRight: "10px" }}>Warehouse Number:</label>
          <span>{job.warehouseNumber}</span>
        </div>


          {job.incoming ? "Incoming" : "Outgoing"}
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  </div>

  );
};

export default App;
