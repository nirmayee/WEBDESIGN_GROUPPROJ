import React, {Component} from 'react'
import { Carousel,Container, Card, Col, Button, Row } from 'react-bootstrap'
import './blogsWrite.scss'

class RealHome extends Component{
    render(){
        return(
          <div style={{ 'minHeight': '100vh' }}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-50"
                      src="images/foodn2.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Recipes Around The World</h3>
                      <p>Relish in the world of cuisines! </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/traveln7.jpg "
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Backpackers</h3>
                      <p>Wandering with no destination!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/blogn1.jpg "
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Reviews</h3>
                      <p>Give your feedback to help others</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <Container>
                <Row>
                    <Col xs={12} lg={4}>
                        <Card className="home-cards">
                          <Card.Img variant="top" src="images/foodCard.png" />
                          <Card.Body>
                            <Card.Title>From sweet to spicy, from mild to got, from Thanksgiving Turkey to Christmas cookie, we present you all the recipes you would need! Experience the Italian Pasta, Mexican Burritos, New York Style Pizza and Japanese Ramen in one click! Need more recipes? Dont forget to reach out!</Card.Title>
                            <Button className="btn-go-to" variant="primary" href="#food">Go Recipes</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4}>
                    <Card className="home-cards" >
                          <Card.Img variant="top" src="images/travelCardn4.jpg" />
                          <Card.Body>
                            <Card.Title>Backpackers, if you are tempted by the cuisines and want to take off, come with us! Explore what your perfect getaway looks like. Explore the world with us. Rome around rome and fall in love in the city of Love! Wander along the streets of Athens and get awed by the Himalayas.</Card.Title>
                            
                            <Button className="btn-go-to" variant="primary" href="#travel">Go Backpackers</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4}>
                    <Card className="home-cards" >
                          <Card.Img variant="top" src="images/blogCardn3.jpg" />
                          <Card.Body>
                            <Card.Title> Been on a trip? Tried a new resturant? Give your feedback here! Let someone know yor experience and help them plan a perfect trip! We now offer various categories for us to provide your feedbacks and help the community. You can now review - adventure sports, group trips and also put in your tips!</Card.Title>
                            
                            <Button className="btn-go-to" variant="primary" href="#blog">Go to Blogging</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default RealHome