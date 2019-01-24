import React from 'react'
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';


const Tweet = (post) => {
  console.log(post)
  const time = new Date(post.time);

  console.log(time);
  console.log(typeof time);
  return (

      <Card>
        <Card.Body>
          <div className='tweet-text'>{post.text}</div>

          <div className='time-text'>
            <Moment>{time}</Moment>
          </div>

        </Card.Body>
        
      </Card>
  )
}

export default Tweet
