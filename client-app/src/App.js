import { ShowProfileList } from "./components/showProfileList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProfile } from "./components/createProfile";
import { AdditionNumbers } from "./components/additionNumbers";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>   
            <Route exact path="/" element={<ShowProfileList/>} />  
            <Route path="/create-profile" element={<CreateProfile/>} />
            <Route path="/addition-numbers" element={<AdditionNumbers />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
