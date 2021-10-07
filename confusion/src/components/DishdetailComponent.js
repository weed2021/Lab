import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from "react-moment";

    function RenderDish({dish}){
        if(dish == null){
            return(<div></div>);
        }
        return(
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

    function RenderComments({comments}){
        if(comments == null){
            return(<div></div>);
        }
        const showComment = comments.map((comment) => {
            return(
                <div key={comment.id}>
                        <p><b>{comment.comment}</b> <br/>
                            <i>-- {comment.author} {"-- "}
                            <Moment format="MMM DD,YYYY">{comment.date}</Moment>
                            </i>
                        </p>  
                </div>
                
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h2 className="text-primary">Comments</h2>
                <hr/>
                {showComment}
            </div>
        );
    }

    const DishDetail = (props)=>{
        const dish = props.dish;
        const comments = props.comments;
        if(dish == null){
            return(<div></div>);
        }
        const dishItem = <RenderDish dish={dish} />;
        const dishComments = <RenderComments comments={comments} />;
        return(
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