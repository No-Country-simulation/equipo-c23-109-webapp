import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login }  from '../components/pages/Login.tsx'
import { Register }  from '../components/pages/Register.tsx'
import { Dashboard }  from '../components/pages/Dashboard.tsx'
import { Home } from '../components/pages/Home.tsx'

export const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
)