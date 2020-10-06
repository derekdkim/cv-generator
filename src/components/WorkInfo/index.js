import React, { useState } from 'react';

function WorkInfo (props) {
  const [workData, setWorkData] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    desc: ''
  });
  const [editMode, setEditMode] = useState(true);
  const { saveData } = props;
  
  const handleInput = (event) => {
    setWorkData({
      ...workData, [event.target.name]: event.target.value
    });
  }

  const saveInfo = (event) => {
    setEditMode(false);
    saveData(workData);
  }

  const editInfo = (event) => {
    setEditMode(true);
  }

  const clearInfo = (event) => {
    setWorkData({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      desc: ''
    });
  }

  if (editMode) {
    return(
      <div className='section' id='work-container'>
        <h2>Work Experience</h2>
        <label htmlFor='company'>Company Name</label>
        <input type='text' name='company' onChange={handleInput} value={workData.company}/>
        <label htmlFor='position'>Position Title</label>
        <input type='text' name='position' onChange={handleInput} value={workData.position}/>
        <label htmlFor='startDate'>Start Date</label>
        <input type='text' name='startDate' onChange={handleInput} value={workData.startDate}/>
        <label htmlFor='endDate'>End Date</label>
        <input type='text' name='endDate' onChange={handleInput} value={workData.endDate}/>
        <label htmlFor='desc'>Work Description</label>
        <input type='text' name='desc' onChange={handleInput} value={workData.desc}/>
        <div className='btn-container'>
          <button className='save-btn' onClick={saveInfo}>Save</button>
          <button className='clear-btn' onClick={clearInfo}>Clear</button>
        </div>
      </div>
    );
  } else {
    return(
      <div className='section' id='work-container'>
        <h2>Work Experience</h2>
        <label htmlFor='company'>Company Name</label>
        <p name='company'>{workData.company}</p>
        <label htmlFor='position'>Position Title</label>
        <p name='position'>{workData.position}</p>
        <label htmlFor='startDate'>Start Date</label>
        <p name='startDate'>{workData.startDate}</p>
        <label htmlFor='endDate'>End Date</label>
        <p name='endDate'>{workData.endDate}</p>
        <label htmlFor='desc'>Work Description</label>
        <p name='desc'>{workData.desc}</p>
        <button className='edit-btn' onClick={editInfo}>Edit</button>
      </div>
    );
  }
}

export default WorkInfo;