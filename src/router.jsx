import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardItem from "./containers/Dashboard"
import Login from "./containers/Login"
import RegisterEmail from "./containers/Register/RegisterEmail"
import RegisterPassword from "./containers/Register/RegisterPassword"

const AppIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register-email" element={<RegisterEmail />} />
        <Route path="/register-password" element={<RegisterPassword />} />
        <Route path="/dashboard" element={<DashboardItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppIndex