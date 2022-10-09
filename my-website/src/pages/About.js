import React, { Component } from 'react'
import {Card} from "react-bootstrap"
export default class About extends Component {
  render() {
    return (
      <Card className="text-center" border="primary" style={{width:'50rem'}}>
        <Card.Img variant='top' src="https://marketplace.canva.com/EAE2_DLA9H8/1/0/1600w/canva-mascot-character-twitch-profile-picture-wD-8htUsoVw.jpg"
        alt= "profile picture" height="500rem"/>
        <Card.Body >
            <Card.Title >Hello</Card.Title>
            <Card.Text>
                Hello, 
                My name is Srujan Vepuri, I am computer science master student.
                I like paying basketball and watching geo-politics. During my free time I improve my skills or play games.
            </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
