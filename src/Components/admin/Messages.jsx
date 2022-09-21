import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Messages.scss';
const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        fname: 'john',
        lname: 'smith',
        email: 'john@gmail.com',
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nisi mollitia reiciendis repudiandae eum? Tempora necessitatibus unde, optio blanditiis aut ipsum molestiae et. Minus assumenda quibusdam rerum ad numquam laborum.',
      },
      {
        fname: 'leila',
        lname: 'gorgc latino',
        email: 'gorgc_latino75@gmail.com',
        text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nisi mollitia reiciendis repudiandae eum? Tempora necessitatibus unde, optio blanditiis aut ipsum molestiae et. Minus assumenda quibusdam rerum ad numquam laborum. dolor sit amet consectetur, adipisicing elit. Nihil nisi mollitia reiciendis ',
      },
    ]);
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
                  <td className='td'>#{i + 1}</td>
                  <td className='td'>{message.fname}</td>
                  <td className='td'>{message.lname}</td>
                  <td className='td'>{message.email}</td>
                  <td className='td message'>{message.text}</td>
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
