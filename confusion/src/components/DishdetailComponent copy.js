import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish == null){
            return(<div></div>);
        }
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />                    
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments){
        if(comments == null){
            return(<div></div>);
        }
        const showcmnts = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(cmnt.date))}
                    </p>
                </li>
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {showcmnts}
                </ul>
            </div>
        );
    }

    render(){
        const dish = this.props.dish;
        const comments = this.props.comments;
        if(dish == null){
            return(<div></div>);
        }
        const dishItem = this.renderDish(dish);
        const dishComments = this.renderComments(comments);
        return(
            <div className='container'>
                <div className="row">
                    <Breadcrumb className='col-md-12'>
                        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
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
}

export default DishDetail;