import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container, Row, Image, Carousel, Col, Form,Button, Dropdown } from "react-bootstrap";
import { HashRouter, Route } from "react-router-dom";
import BlogByUser from "./BlogByUser";
import BlogServices from '../services/blogs.services';
import './blogsWrite.scss'
import Advertisements from "./Advertisements";

class Blog extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            rowLength:3,
            heading:'',
            content:'',
            postTag:'Choose Category',
            tagsList:['All','Travelling Alone','Adventurous Activities','Backpackers Advice','Travelling Stories','Hikes and Trails','Budget Travel', 'Special Diet','Recipies','Miscellaneous'],
            selectedTag:'none',
            userName: localStorage.getItem("user") !== null && localStorage.getItem("user") !== undefined
            ? JSON.parse(localStorage.getItem("user")).userName
            : ''
        }
    }

    render(){

        const formSubmit = (e) =>{
            e.preventDefault()
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            var tag_new=''
            this.state.postTag === 'Choose Category'
            ? tag_new = 'Miscellaneous'
            : tag_new= this.state.postTag
            BlogServices.addPost(
                tag_new,
                this.state.heading,
                this.state.content,
                today,
                this.state.userName
                ).then( ()=>{
                    window.location.reload();
                },
                error =>{
                    console.log('error.respons')
                })
            const blog={ //add user id
                tag:this.state.postTag,
                head:this.state.heading,
                content:this.state.content,
                
            }
            this.props.writeBlog(blog)
            this.setState({rowLength:3,heading:'Title of the post',content:'Write something here',postTag:'Choose Category',color:'grey'})

        }
        console.log(this.state)
        

        return(
            <Container>
                <Row >
                    <h2 className="d-flex justify-content-center">
                        We appreciate your Feedback!
                    </h2>
                </Row>
                <Row>
                   
                    <Col xs={8} md={8}>
                        <Form.Label><h5>Feedback</h5></Form.Label>
                    </Col>
                    <Col xs={3} md={3}>
                    <Dropdown className="d-flex justify-content-center">
                              <Dropdown.Toggle className='dropdown-tag' id="dropdown-basic" >
                                {<b>{this.state.postTag}</b>}
                              </Dropdown.Toggle>
            
                              <Dropdown.Menu className='dropdown-menu'>
                                  {this.state.tagsList.map((tag)=>(
                                      <Dropdown.Item className='dropdown-item-tag' 
                                      onClick={(e)=>{this.setState({postTag:tag})}} 
                                      key={tag}>{<b>{tag}</b>}</Dropdown.Item>
                                  ))}
                              </Dropdown.Menu>
                            </Dropdown>
                    </Col>
                </Row>
                <Row>
                    
                    <Col xs={12} md={8}>
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            style={{backgroundColor:'##FFFFFF', color:'##FFFFFF', border: '0.5px solid #002934'}}
                            as="textarea" rows={1}
                            placeholder='Feedback Heading'
                            value={this.state.heading}
                            onChange={(e)=> {this.setState({heading:e.target.value})}}
                            />
                        </Form.Group>
                        </Form>
                    </Col>
                    
                </Row>
                <Row className="last-row">
                   
                    <Col xs={12} md={8}>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Control as="textarea" 
                            style={{backgroundColor:'#FFFFFF', color:'#000000', border: '0.5px solid #002934'}}
                            rows={this.state.rowLength}
                            placeholder='Rate Us Here'
                            value={this.state.content}
                            onClick={(e)=>{this.setState({rowLength:10})}} 
                            onChange={(e)=> {this.setState({content:e.target.value})}}/>
                        </Form.Group>
                        {
                            this.state.heading !== '' && this.state.content !==''
                            ?<Button className="btn-post" variant="primary" type="submit">Post</Button>
                            :<Button className="btn-post" variant="primary" type="submit" disabled>Post</Button>
                        }
                    </Form>
                    </Col >
                    
                    
                </Row>
                <Row>
                  
                    <Col xs={12} md={8} className="user-blogs">
                        <BlogByUser userName={this.state.userName}/>
                    </Col>
                    <Col xs={12} md={3}>
                        <div className='ads-ads'>
                            <Advertisements />
                            <Advertisements />
                            <Advertisements />
                        </div>
                    </Col>

                </Row>
                
            </Container>
        )
    }
}

export default Blog;