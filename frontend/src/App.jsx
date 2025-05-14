import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/enquiries" element={<div className="p-4">Enquiries Page</div>} />
          <Route path="/quotation" element={<div className="p-4">Quotation Page</div>} />
          <Route path="/measurement-summaries" element={<div className="p-4">Measurement Summaries Page</div>} />
          <Route path="/bill-of-materials" element={<div className="p-4">Bill of Materials Page</div>} />
          <Route path="/job-order" element={<div className="p-4">Job Order Page</div>} />
          <Route path="/material-requisition" element={<div className="p-4">Material Requisition Page</div>} />
          <Route path="/settings" element={<div className="p-4">Settings Page</div>} />
          <Route path="/sales-orders" element={<div className="p-4">Sales Orders Page</div>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
