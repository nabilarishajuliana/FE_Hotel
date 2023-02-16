import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import TypeRoom from "./Pages/TypeRoom";
import Room from "./Pages/Room";
import User from "./Pages/User";
import Customer from "./Pages/Customer";
import HistoryTransaksi from "./Pages/HistoryTransaksi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/typeroom" element={<TypeRoom />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/historytransaksi" element={<HistoryTransaksi />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
