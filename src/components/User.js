import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import {connect} from 'react-redux';

class User extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <h1>User Profile</h1>
        <h2>{this.props.user.name}</h2>
        <h2>{this.props.user.email}</h2>
        <h2>Post Count: {this.props.user.posts.length}</h2>
      </Container>
    )
  }
}
function mapStateToProps(state){
  return{
    user: state
  }
}

export default connect(mapStateToProps)(User)

