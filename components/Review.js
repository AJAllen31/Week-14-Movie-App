import React from 'react'
import ReviewForm from './ReviewForm';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.userReview = props.userReview;
    this.key = props.key;
  }
// this following code is suppose to allow user to submit review, 
// but doesnt show review but allows user to type 
  render() {
    return (
      <Card>
        <Card.Body><em>{this.userReview}></em></Card.Body>
      </Card>
    )
  }
}