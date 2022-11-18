import './index.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day.tsx';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Emptypage from './component/Emptypage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<DayList />}/>
          <Route path="day/:day" element={<Day />}/>
          <Route path="create_word" element={<CreateWord />}/>
          <Route path="create_day" element={<CreateDay />}/>
          <Route path="*" element={<Emptypage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
