import DayList from './component/DayList';
import Header from './component/Header'
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmptyPage from './component/EmptyPage';

// /가 일치하기 때문에 exact를 붙여줘야 한다. v6 부턴 안해도됨
function App() {
  return (
    <BrowserRouter>    
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<DayList />}></Route>
            <Route path="/day/:day" element = {<Day />}></Route>
            <Route element={<EmptyPage />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
