import React from 'react'
import Home from './home/Home'
import Transactions from './transactions/Transactions'
import { Route, Routes } from "react-router-dom"
import Signup from './components/Signup'

const App = () => {
    return (
    <>
        
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Transactions" element={<Transactions />}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </>)  
}

export default App