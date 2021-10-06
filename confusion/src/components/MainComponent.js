import React,{Component} from 'react';

import {Navbar, NavbarBrand,Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Moment from "react-moment";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
        dishes: DISHES,
        selectedDish: null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish})
    }
    renderDish(dish){
        if(dish!=null){
            const comments = dish.comments.map((comment)=>{
                return (
                    <div key={comment.id}>
                        <p><b>{comment.comment}</b> <br/>
                            <i>-- {comment.author} {"-- "}
                            <Moment format="MMM DD,YYYY">{comment.date}</Moment>
                            </i>
                        </p>  
                    </div>
                );
            })

            return (
                <div className="row mt-4" >
                    <div className="col-12 col-md-6 p5">
                        <Card>
                            <CardImg width ="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle tag='h4'>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div >  

                    <div className="col-12 col-md-6 p5">
                        <h2 className="text-primary">Comments</h2>
                        <hr/>
                        {comments}
                    </div>
                </div>
                
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
        <div >
            <Navbar dark color = "primary">
            <div className="container">
                <NavbarBrand href="/">Lab04</NavbarBrand>
            </div>
            </Navbar>
            <Menu dishes={this.state.dishes}
                onClick={(dish)=>this.onDishSelect(dish)}
            />

            <div className="container">
                {this.renderDish(this.state.selectedDish)}
            </div>
            
        </div>
        );

    }
}


export default App;
