import React,{Component} from 'react';

import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import Moment from "react-moment";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
        // selectedDish: null
        };
    }

    // onDishSelect(dish){
    //     this.setState({selectedDish:dish})
    // }

    // <div className="container">
    //             {this.renderDish(this.state.selectedDish)}
    //         </div>
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

        const HomePage=()=>{
            return (
                <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                />
            );
        }
        return(
            <div >
                <BrowserRouter>
                    <Header />
                    <Switch>
                        
                        <Route path='/home' component={HomePage}/>
                        <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes} />} />
                        <Route exact path='/contact' component={Contact} />
                        <Redirect to='/home' />
                        
                        
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        );

    }
}


export default App;
