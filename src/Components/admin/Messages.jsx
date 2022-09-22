import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import './Messages.scss';
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const apiUrl = 'https://portfoliorecovery.me/api/contact.php';
        const res = await fetch(apiUrl);
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, []);
  return (
    <div className='container'>
      <div className='messages'>
        <h3 className='heading-tertiary'>Messages</h3>

        <div className='table-content'>
          <table className='table'>
            <tr className='tr'>
              <th className='th'>row</th>
              <th className='th'>first name</th>
              <th className='th'>last name</th>
              <th className='th'>email</th>
              <th className='th'> message</th>
            </tr>
            {messages.map((message, i) => {
              return (
                <tr>
                  <td className='td bold'>#{i + 1}</td>
                  <td className='td'>{message.firstname}</td>
                  <td className='td'>{message.lastname}</td>
                  <td className='td'>{message.email}</td>
                  <td className='td message'>{message.message}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
