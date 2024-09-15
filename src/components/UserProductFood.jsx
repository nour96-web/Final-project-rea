import React from 'react'
import { Button, Card } from 'react-bootstrap'
import WishlistButton from './WishlistButton'

const UserProductFood = ( {el } ) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={el.imgUrl}
          style={{ width: "100%", height: "230px" }}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text> {el.details}</Card.Text>
          <Card.Text>
            <p>{el.price}</p>
          </Card.Text>
          <div className="flex-btn">
          <Button variant="submit">add to cart</Button>
          <WishlistButton el={el} />
          <Button variant="submit">Login</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserProductFood