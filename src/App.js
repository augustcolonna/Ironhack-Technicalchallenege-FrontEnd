import { Route, Routes } from "react-router-dom";
import "./App.css";

import ListPhones from "./components/ListPhones";
import PhoneDetails from "./components/PhoneDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/phones" element={<ListPhones />} />
      <Route path="/phones/:phonesId" element={<PhoneDetails />} />
    </Routes>
  );
}

export default App;
