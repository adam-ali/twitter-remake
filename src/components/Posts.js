import React, { Component } from 'react'
import { Container, Card,Form,Row, Col,Button } from 'react-bootstrap';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import * as userActions from '../redux/actions/userActions';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state ={
      text: '',
      time: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.PostTweet = this.PostTweet.bind(this)
    
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  PostTweet(e) {
    e.preventDefault();
    const dateTime = Date.now();

    this.setState({
        time : dateTime
      },
      () =>{
        this.props.dispatch(userActions.AddPost(this.state));
        this.setState({text: ''});
      }
    );
    

  }

  render() {
    return (
      <Container>
        <Card>
          <Card.Body> 
          
          <Form onSubmit={this.PostTweet}>
            <Row>
              <Col sm={12}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control onChange={this.handleInputChange} value={this.state.text} maxLength='140' name='text' as="textarea" rows="3" />
              </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col sm={{ span: 2, offset: 8 }}>
                {this.state.text.length}/140
              </Col>
              <Col sm={{ span: 2 }}>
                <Button type="submit" variant="outline-primary" >Secondary</Button>
              </Col>
            </Row>
          </Form>

          </Card.Body>
        </Card>
        
        { this.props.posts.map( (post,i)=>{
          return(
            <Tweet {...post} key={i}></Tweet>
          )
        })}

      </Container>
    );
  }
};

function mapStateToProps(state){
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)