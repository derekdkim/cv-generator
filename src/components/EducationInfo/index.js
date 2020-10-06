import React, { useState } from 'react';

function EducationInfo (props) {
  const [educationData, setEducationData] = useState({
    institution: '',
    degree: '',
    gradYear: ''
  });
  const [editMode, setEditMode] = useState(true);
  const { saveData } = props;
  
  const handleInput = (event) => {
    setEducationData({
      ...educationData, [event.target.name]: event.target.value
    });
  }

  const saveInfo = (event) => {
    setEditMode(false);
    saveData(educationData);
  }

  const editInfo = (event) => {
    setEditMode(true);
  }

  const clearInfo = (event) => {
    setEducationData({
      institution: '',
      degree: '',
      gradYear: ''
    });
  }

  if (editMode) {
    return(
      <div className='section' id='education-container'>
        <h2>Education</h2>
        <label htmlFor='institution'>Institution Name</label>
        <input type='text' name='institution' onChange={handleInput} value={educationData.institution}/>
        <label htmlFor='degree'>Degree Information</label>
        <input type='text' name='degree' onChange={handleInput} value={educationData.degree}/>
        <label htmlFor='gradYear'>Year of Graduation</label>
        <input type='text' name='gradYear' onChange={handleInput} value={educationData.gradYear}/>
        <div className='btn-container'>
          <button className='save-btn' onClick={saveInfo}>Save</button>
          <button className='clear-btn' onClick={clearInfo}>Clear</button>
        </div>
      </div>
    );
  } else {
    return(
      <div className='section' id='education-container'>
        <h2>Education</h2>
        <label htmlFor='institution'>Institution Name</label>
        <p name='institution'>{educationData.institution}</p>
        <label htmlFor='degree'>Degree Information</label>
        <p name='degree'>{educationData.degree}</p>
        <label htmlFor='gradYear'>Year of Graduation</label>
        <p name='gradYear'>{educationData.gradYear}</p>
        <button className='edit-btn' onClick={editInfo}>Edit</button>
      </div>
    );
  }
}

export default EducationInfo;