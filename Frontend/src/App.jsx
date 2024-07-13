import React from 'react'
import Home from './home/Home'
import Transactions from './transactions/Transactions'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

const App = () => {
    const [authUser,setAuthUser] = useAuth();
    console.log(authUser)
    return (
    <>
        
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Transactions" element={authUser? <Transactions />: <Navigate to="/signup"/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        <Toaster />
    </>)  
}

export default App