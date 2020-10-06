import React from 'react';
import './index.css';

function Output (props) {
  const { data } = props;

  return(
    <div className='main-container' id='output-container'>
      <div className='section' id='contact-output-container'>
        <h1>{data[0].name.length > 0 ? data[0].name : 'Placeholder McPlaceholderface'}</h1>
        <p>{data[0].address.length > 0 ? data[0].address : '123 Placeholder Avenue'}</p>
        <p>{data[0].phone.length > 0 ? data[0].phone : '+1-123-4567'}</p>
        <p>{data[0].email.length > 0 ? data[0].email : 'Placeholder@placeholder.com'}</p>
      </div>
      <div className='section' id='work-output-container'>
        <h3>Experience</h3>
        <h4 className='subheading'>{data[2].company.length > 0 ? data[2].company : 'Placeholder Inc.'}</h4>
        <p>{data[2].position.length > 0 ? data[2].position : 'Professional Placeholder'}</p>
        <p>{data[2].startDate.length > 0 ? data[2].startDate : '1999'} - {data[2].endDate.length > 0 ? data[2].startDate : '2020'}</p>
        <p>{data[2].desc.length > 0 ? data[2].desc : 'Acted as a placeholder'}</p>
      </div>
      <div className='section' id='education-output-container'>
        <h3>Education</h3>
        <h4 className='subheading'>{data[1].institution.length > 0 ? data[1].institution : 'University of Placeholder'}</h4>
        <p>{data[1].degree.length > 0 ? data[1].degree : 'BA in Placeholder Studies'}</p>
        <p>{data[1].gradYear.length > 0 ? data[1].gradYear : '2020'}</p>
      </div>
    </div>
  );
}

export default Output;