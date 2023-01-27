import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Header.css'

const Header = () => {
  return (
    <Row>
    <Col sm='12' className='justify-content-center text-center' >
        <div className='title'>MENU</div>
        <div className='center '>
        <p className='underline'></p>
        </div>
        
    </Col>
    </Row>
  )
}

export default Header