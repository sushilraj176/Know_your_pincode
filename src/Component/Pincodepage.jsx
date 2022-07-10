import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Pincodepage = () => {
  const [postOffices, setPostOffices] = useState([]);

  const [pincode, setPincode] = useState('');

  const url = `https://api.postalpincode.in/pincode/${pincode}`;

  const getAllPostOffice = async () => {
    await axios
      .get(`${url}`)
      .then((res) => {
        // let result = res.data[0].PostOffice;

        setPostOffices(res.data[0].PostOffice);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const updateSearch = (e) => {
    setPincode(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setPincode('');
  };

  return (
    <>
      <section id='cover' className='min-vh-100'>
        <div id='cover-caption'>
          <div className='container'>
            <div className='row text-white'>
              <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
                <div className='px-2'>
                  <form onSubmit={getSearch} className='justify-content-center'>
                    <div className='form-group'>
                      <label className='sr-only'>Pincode</label>
                      <input
                        type='search'
                        className='form-control'
                        value={pincode}
                        onChange={updateSearch}
                        placeholder='Search pincode..'
                      />
                    </div>

                    <button
                      type='submit'
                      onClick={getAllPostOffice}
                      className='btn btn-primary btn-lg'
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Block</th>
            <th scope='col'>District</th>
            <th scope='col'>Division</th>
            <th scope='col'>State</th>
            <th scope='col'>Country</th>
          </tr>
        </thead>

        {postOffices.map((postoffice) => {
          return (
            <tbody>
              <tr>
                <td>{postoffice.Name}</td>
                <td>{postoffice.Block}</td>
                <td>{postoffice.District}</td>
                <td>{postoffice.Division}</td>
                <td>{postoffice.State}</td>
                <td>{postoffice.Country}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Pincodepage;
