import React, { useState } from 'react';
import ContactInfo from '../ContactInfo';
import EducationInfo from '../EducationInfo';
import WorkInfo from '../WorkInfo';
import './index.css';

function Form (props) {
  const [contactData, setContactData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [workData, setWorkData] = useState(null);
  const { submitData, setFormCompleted } = props;

  const handleSubmit = () => {
    if (contactData && educationData && workData) {
      submitData([contactData, educationData, workData]);
      setFormCompleted(true);
    }
  }

  return (
    <div className='main-container'>
      <h1>CV Generator</h1>
      <div id='form'>
        <ContactInfo saveData={setContactData}/>
        <EducationInfo saveData={setEducationData}/>
        <WorkInfo saveData={setWorkData}/>
        <div id='submit-btn-container'>
          <button id='submit-btn' onClick={handleSubmit}>Submit Application</button>
        </div>
      </div>
    </div>

  );
}

export default Form;