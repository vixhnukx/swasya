import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import'./Doctor.css'
function Doctor() {
  return (
    <div className='doc-card'>
      <h2>Doctors team</h2>
      <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
    <CardGroup>
    <Card>
      <Card.Img className='card' variant="top" src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" />
      <Card.Body>
        <Card.Title>Calvin Carlo</Card.Title>
        <Card.Text>
        Eye Care
        </Card.Text>
      </Card.Body>
     <button className='register-btn'>Know more</button>
    </Card>
    
    <Card>
      <Card.Img className='card' variant="top" src="https://shreethemes.in/doctris/layouts/assets/images/doctors/02.jpg" />
      <Card.Body>
        <Card.Title>Steev</Card.Title>
        <Card.Text>
        Orthopedic
        </Card.Text>
      </Card.Body>
     <button className='register-btn'>Know more</button>
    </Card>
    <Card>
      <Card.Img className='card' variant="top" src="https://shreethemes.in/doctris/layouts/assets/images/doctors/03.jpg" />
      <Card.Body>
        <Card.Title>Eva</Card.Title>
        <Card.Text>
        Dentist
        </Card.Text>
      </Card.Body>
     <button className='register-btn'>Know more</button>
    </Card>
    <Card>
      <Card.Img className='card' variant="top" src="https://shreethemes.in/doctris/layouts/assets/images/doctors/05.jpg" />
      <Card.Body>
        <Card.Title>Jessica</Card.Title>
        <Card.Text>
        Neurologist
        </Card.Text>
      </Card.Body>
     <button className='register-btn'>Know more</button>
    </Card>
    <Card>
      <Card.Img className='card' variant="top" src="https://shreethemes.in/doctris/layouts/assets/images/doctors/07.jpg" />
      <Card.Body>
        <Card.Title>Maya</Card.Title>
        <Card.Text>
        Cardiology
        </Card.Text>
      </Card.Body>
     <button className='register-btn'>Know more</button>
    </Card>
  </CardGroup>
  </div>
    
  )
}

export default Doctor