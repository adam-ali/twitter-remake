import React, { Component } from 'react'
import { Button, Form, Container,Card } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/userActions';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.submitForm = this.submitForm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  submitForm(e) {
    e.preventDefault();

    this.props.dispatch(userActions.AddUser(this.state));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.props.user);
    return (

      <Container>
        <Card style={{marginTop: '1em'}}>
        <Card.Body>

          <Form onSubmit={this.submitForm}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={this.handleInputChange} name='name' type='text' placeholder='Enter your name'></Form.Control> 
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.handleInputChange} type="email" name='email' placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
function mapStateToProps(state){
  return{
    user: state
  }
}

export default connect(mapStateToProps)(SignUp)
