import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Prod = () => {
  const [third, setThird] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setThird(res.data);
    });
  }, []);

  // Filter products based on the selected category
  const filterProducts =
  "women's clothing" !== ''
      ? third.filter((data) => data.category === "women's clothing")
      : third;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filterProducts.map((data) => {
        return (
          <Card style={{ width: '18rem' }} key={data.id}>
            <Card.Img variant="top" src={data.image} style={{width:'270px',height:'300px'}}/>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
          Price:{data.price}<br/>
          Rating:{data.rating.rate}
          
        </Card.Text>
              <div style={{ display: 'flex', gap: '10px' }}></div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Prod;