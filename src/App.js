import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import UiKit from "./components/UiKit/UiKit";
import SchedulesInfo from "./components/SchedulesInfo/SchedulesInfo";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/ui-kit' element={<UiKit />}/>
          <Route path='*' element={<SchedulesInfo/>}/>
          {/*<Route path='/ui-kit' element={<Cabinet />}/>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
