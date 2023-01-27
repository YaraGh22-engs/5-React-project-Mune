import { Col, Row } from 'react-bootstrap'
import './Categories.css'
import {Roll}  from "react-reveal";

const Categories = ({FilterCat,AllCategory}) => {

//Onfilter function to filter by category
const OnFilter = (cat)=>{
  FilterCat(cat)
  console.log(cat)
}
   
  return (
    <Row className='my-2 mb-5'>

        {
          AllCategory.length>1 ? (
            <Col sm='12' className='center '>
            <Roll>
            {AllCategory.map((cat,index)=> {
                return(
                  <button  key={index} onClick={()=>OnFilter(cat)} className='mx-2 btn'>{cat}</button>
                )
              })
            }
            </Roll>
            </Col>
          ):<h3> No Category </h3>
        }
       
    </Row>
  )
}

export default Categories