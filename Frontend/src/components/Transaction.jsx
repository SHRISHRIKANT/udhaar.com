import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Transaction() {
  const [udhaar, setUdhaar] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchUdhaar = async () => {
      try {
        const res = await axios.get("http://localhost:4001/udhaar");
        console.log(res.data);
        setUdhaar(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUdhaar(); // Call the function to fetch Udhaar entries
  }, []);

  const toggleDetails = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
      setSelectedCustomer(null);
    } else {
      setExpandedRow(id);
      const customer = udhaar.find((item) => item.id === id);
      setSelectedCustomer(customer);
    }
  };

  const showModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const sendSMS = (mobileNumber) => {
    // Implement your SMS sending logic here
    console.log(`Sending SMS to ${mobileNumber}`);
  };

  const callNumber = (mobileNumber) => {
    // Implement your call logic here
    console.log(`Calling ${mobileNumber}`);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            List of all the <span className="text-pink-500">customers</span>
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Total Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {udhaar.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.total_amount}</td>
                      <td>
                        <button
                          className="btn btn-ghost btn-xs"
                          onClick={() => toggleDetails(item.id)}
                        >
                          {expandedRow === item.id ? 'Hide details' : 'Details'}
                        </button>
                      </td>
                    </tr>
                    {expandedRow === item.id && (
                      <tr className="details-row">
                        <td colSpan="4">
                          <table className="nested-table">
                            <thead>
                              <tr>
                                <th>Index</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.entries.map((entry, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{entry.description}</td>
                                  <td>{entry.category}</td>
                                  <td>{entry.price}</td>
                                  <td>{entry.date}</td>
                                </tr>
                              ))}
                              <tr>
                                <td colSpan="5">
                                  Mobile number: {selectedCustomer.mobile_number}
                                  <button
                                    className="rounded-md p-2 mx-2 text-white bg-pink-500 hover:bg-pink-600 duration-500"
                                    onClick={() => sendSMS(selectedCustomer.mobile_number)}
                                  >
                                    SMS
                                  </button>
                                  <button
                                    className="rounded-md p-2 mx-2 text-white bg-pink-500 hover:bg-pink-600 duration-500"
                                    onClick={() => callNumber(selectedCustomer.mobile_number)}
                                  >
                                    Call
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <td></td>
                  <td>Name</td>
                  <td>Total Amount</td>
                  <td>
                    <button
                      className="rounded-md p-2 ml-5 text-white bg-pink-500 hover:bg-pink-600 duration-500"
                      onClick={showModal}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        
      </div>

      {/* Modal for adding new entry */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>
          <h3 className="font-bold text-lg">Add New Entry</h3>
          {/* Include your Add component here */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* Styles */}
      <style jsx>{`
        .table {
          width: 100%;
          table-layout: fixed;
        }
        .table th,
        .table td {
          padding: 0.5rem;
          text-align: left;
        }
        .table tbody tr.details-row {
          background-color: #f9f9f9;
        }
        .nested-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        .nested-table th,
        .nested-table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-box {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          width: 400px;
          max-width: 90%;
          position: relative;
        }
        .modal-backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn-primary {
          background-color: #3182ce;
          color: white;
          border: 1px solid transparent;
        }
        .btn-primary:hover {
          background-color: #2c5282;
        }
      `}</style>
    </>
  );
}

export default Transaction;
