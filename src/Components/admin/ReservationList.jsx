import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ReservationList = () => {
  const [reserveList, setReserveList] = useState([]);

  useEffect(() => {
    setReserveList([
      {
        fname: 'mike',
        lname: 'chandler',
        email: 'mike@gmail.com',
        phone: '514-256-14-36',
        guests: 17,
        checkIn: '2015-01-2',
        checkOut: '2015-01-15',
      },
    ]);
  }, []);
  return (
    <div className='container'>
      <div className='reservation'>
        <h3 className='heading-tertiary'>Reservation List</h3>

        {reserveList.length > 0 && (
          <div className='table-content'>
            <table className='table'>
              <tr className='tr'>
                <th className='th'>row</th>
                <th className='th'>first name</th>
                <th className='th'>last name</th>
                <th className='th'>email</th>
                <th className='th'> phone</th>
                <th className='th'># of guests</th>
                <th className='th'>check in</th>
                <th className='th'>check out</th>
              </tr>
              {reserveList.map((item, i) => {
                return (
                  <tr>
                    <td className='td'>#{i + 1}</td>
                    <td className='td'>{item.fname}</td>
                    <td className='td'>{item.lname}</td>
                    <td className='td'>{item.email}</td>
                    <td className='td'>{item.phone}</td>
                    <td className='td'>{item.guests}</td>
                    <td className='td'>{item.checkIn}</td>
                    <td className='td'>{item.checkOut}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationList;
