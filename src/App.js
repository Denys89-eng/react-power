import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExercizeDetail";
import Box from '@mui/material/Box'
function App() {
  return (
    <Box sx={{width: { xl: '1488px'}}} m='auto'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
      </Routes>
    </Box>
  );
}

export default App;
