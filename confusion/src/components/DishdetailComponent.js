import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, Button, ModalBody, FormGroup, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from "react-moment";
import { Control, Errors, LocalForm } from 'react-redux-form';


const required = (val) => val && val.length



function RenderDish({ dish }) {
    if (dish == null) {
        return (<div></div>);
    }
    return (
        <div className='col-12 col-md-6 p5'>
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag='h4'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments, addComment, dishId }) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    if (comments == null) {
        return (<div></div>);
    }
    const showComment = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p><b>{comment.comment}</b> <br />
                    <i>-- {comment.author} {"-- "}
                        <Moment format="MMM DD,YYYY">{comment.date}</Moment>
                    </i>
                </p>
            </div>

        );
    });

    const handleSubmit = (values) => {
        addComment(dishId, values.rating, values.author, values.comment);
    }
    return (
        <div className='col-12 col-md-5 m-1'>
            <h2 className="text-primary">Comments</h2>
            <hr />
            {showComment}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add new comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor='rating' md={3}>Rating</Label>
                            <Col md={9}>
                                <Control.select
                                    model='.rating'
                                    name='rating'
                                    id='rating'
                                    className='form-control'
                                    validators={{
                                        required
                                    }}>

                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Control.select>
                            </Col>
                            <Errors
                                model='.rating'
                                className='text-danger'
                                show='touched'
                                messages={{
                                    required: 'Không rate à!'
                                }}
                            />


                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor='comment' md={3}>Comment</Label>
                            <Col md={9}>
                                <Control.textarea
                                    model='.comment'
                                    name='comment'
                                    id='comment'
                                    className='form-control'
                                    placeholder='Content comment here...'
                                    rows='4'
                                    validators={{
                                        required
                                    }}
                                />
                            </Col>
                            <Errors
                                model='.comment'
                                className='text-danger'
                                show='touched'
                                messages={{
                                    required: 'Không được bỏ trống!'
                                }}
                            />
                        </Row>

                        <Row className='form-group'>
                            <Label htmlFor='author' md={3}>Author</Label>
                            <Col md={9}>
                                <Control.text
                                    model='.author'
                                    name='author'
                                    id='author'
                                    className='form-control'
                                    validators={{
                                        required
                                    }}
                                />
                            </Col>
                            <Errors
                                model='.author'
                                show='touched'
                                className='text-danger'
                                messages={{
                                    required: 'Không được bỏ trống!'
                                }}
                            />
                        </Row>
                        <Row className='form-group'>
                            <Col md={{ size: 9, offset: 3 }}>
                                <Button type='submit'>Add</Button>
                            </Col>

                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            <Button color='primary' onClick={toggle}>Add comment</Button>
        </div>
    );
}

const DishDetail = (props) => {




    const dish = props.dish;
    const comments = props.comments;
    if (dish == null) {
        return (<div></div>);
    }

    const dishItem = <RenderDish dish={dish} />;
    const dishComments = <RenderComments comments={comments} addComment={props.addComment} dishId={dish.id} />;


    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb className='col-md-12'>

                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>


            </div>

            <div className='row'>
                {dishItem}
                {dishComments}
            </div>
        </div>

    );
}

export default DishDetail;