import React, { useState } from 'react';
import list from '../../public/list.json';

function Transaction() {
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleDetails = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
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
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <th>
                        <button 
                          className="btn btn-ghost btn-xs" 
                          onClick={() => toggleDetails(item.id)}
                        >
                          {expandedRow === item.id ? 'hide details' : 'details'}
                        </button>
                      </th>
                    </tr>
                    {expandedRow === item.id && (
                      <tr>
                        <td colSpan="4">
                          <div className="p-4 text-center">
                            <p><strong>Title:</strong> {item.title}</p>
                            <p><strong>Object:</strong> {item.object}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Styles to ensure the table layout doesn't shift */}
      <style jsx>{`
        .table {
          width: 100%;
          table-layout: fixed;
        }
        .table th, .table td {
          padding: 0.5rem;
          text-align: left;
        }
        .table tbody tr.details-row {
          background-color: #f9f9f9;
        }
      `}</style>
    </>
  );
}

export default Transaction;
