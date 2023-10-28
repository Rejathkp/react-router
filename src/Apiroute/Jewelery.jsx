import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Prodt = () => {
  const [fourth, setFourth] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setFourth(res.data);
    });
  }, []);

  // Filter products based on the selected category
  const filtProducts =
  "jewelery" !== ''
      ? fourth.filter((data) => data.category === "jewelery")
      : fourth;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filtProducts.map((data) => {
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

export default Prodt;