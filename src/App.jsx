import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Team } from "./Team";
import { Projects } from "./Projects";
import { Calendar } from "./Calendar";



function App() {
 
  return (
 <Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/Team" element={<Team/>}/>
  <Route path="/Projects" element={<Projects/>}/>
  <Route path="/Calendar" element={<Calendar/>}/>
 </Routes>
  )
}

export default App;
