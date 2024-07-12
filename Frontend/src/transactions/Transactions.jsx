import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Transaction from '../components/Transaction'
import list from '../../public/list.json'

function Transactions() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Transaction />
      </div>
      <Footer />
    </>
  )
}

export default Transactions
