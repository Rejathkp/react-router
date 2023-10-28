import React from 'react'
import { Carousel } from 'react-bootstrap'

function Hme() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="imge"
          src="https://www.jetsetter.com//uploads/sites/7/2018/04/s0i_qgfG-1380x690.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imge"
          src="https://i0.wp.com/snowleopard.org/wp-content/uploads/2012/03/india-landscape.jpg?ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imge"
          src="https://wallpaperaccess.com/full/3918832.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
  )
}

export default Hme 