import React, { useState } from 'react';

function ContactInfo (props) {
  const [contactData, setContactData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  const [editMode, setEditMode] = useState(true);
  const { saveData } = props;
  
  const handleInput = (event) => {
    setContactData({
      ...contactData, [event.target.name]: event.target.value
    });
  }

  const saveInfo = (event) => {
    setEditMode(false);
    saveData(contactData);
  }

  const editInfo = (event) => {
    setEditMode(true);
  }

  const clearInfo = (event) => {
    setContactData({
      name: '',
      address: '',
      email: '',
      phone: ''
    });
  }

  if (editMode) {
    return(
      <div className='section' id='contact-info-container'>
        <h2>Contact Information</h2>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' onChange={handleInput} value={contactData.name}/>
        <label htmlFor='address'>Address</label>
        <input type='text' name='address' onChange={handleInput} value={contactData.address}/>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' onChange={handleInput} value={contactData.email}/>
        <label htmlFor='phone'>Phone</label>
        <input type='text' name='phone' onChange={handleInput} value={contactData.phone}/>
        <div className='btn-container'>
          <button className='save-btn' onClick={saveInfo}>Save</button>
          <button className='clear-btn' onClick={clearInfo}>Clear</button>
        </div>
      </div>
    );
  } else {
    return(
      <div className='section' id='contact-info-container'>
        <h2>Contact Information</h2>
        <label htmlFor='name'>Name</label>
        <p name='name'>{contactData.name}</p>
        <label htmlFor='address'>Address</label>
        <p name='address'>{contactData.address}</p>
        <label htmlFor='email'>Email</label>
        <p name='email'>{contactData.email}</p>
        <label htmlFor='phone'>Phone</label>
        <p name='phone'>{contactData.phone}</p>
        <button className='edit-btn' onClick={editInfo}>Edit</button>
      </div>
    );
  }
}

export default ContactInfo;