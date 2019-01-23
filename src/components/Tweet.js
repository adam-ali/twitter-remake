import React from 'react'
import { Card } from 'react-bootstrap';

const Tweet = (post) => {
  console.log(post)
  const time = new Date(post.time);

  console.log(time)
  return (

      <Card>
        <Card.Body>
          {post.text}
          <div>dd</div>
        </Card.Body>
        
      </Card>
  )
}

export default Tweet
