import React from 'react'
import { Carousel } from 'react-bootstrap'

function Hme() { 
  return (
    <div>
        <Carousel> 
      <Carousel.Item>
        <img
          className="imge"
          src="https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms"
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
          src="https://imgv3.fotor.com/images/blog-richtext-image/take-a-picture-with-camera.png"
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
          src="https://s.studiobinder.com/wp-content/uploads/2021/01/Best-Black-and-white-pictures.jpg.webp?resolution=2294,0.75"
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