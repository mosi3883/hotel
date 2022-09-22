import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReservationList = () => {
  const [reserveList, setReserveList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const apiUrl = 'https://portfoliorecovery.me/api/reservation.php';
        const res = await fetch(apiUrl);
        const data = await res.json();
        setReserveList(data);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  return (
    <div className='container'>
      <div className='reservation'>
        <h3 className='heading-tertiary'>Reservation List</h3>

        {reserveList.length > 0 && (
          <div className='table-content'>
            <table className='table'>
              <thead>
                <tr className='tr'>
                  <th className='th'>row</th>
                  <th className='th'>hotel id</th>
                  <th className='th'>first name</th>
                  <th className='th'>last name</th>
                  <th className='th'>email</th>
                  <th className='th'>phone</th>
                  <th className='th'>number of guests</th>
                  <th className='th'>check in</th>
                  <th className='th'>check out</th>
                </tr>
              </thead>
              <tbody>
                {reserveList.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className='td bold'>#{i + 1}</td>
                      <td className='td'>{item['hotel_id']}</td>
                      <td className='td'>{item.firstname}</td>
                      <td className='td'>{item.lastname}</td>
                      <td className='td'>{item.email}</td>
                      <td className='td'>{item.phone}</td>
                      <td className='td'>{item['number_of_guests']}</td>
                      <td className='td'>{item.checkin}</td>
                      <td className='td'>{item.checkout}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationList;
