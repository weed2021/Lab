import React,{Component} from 'react';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
        };
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
        const DishWithId = ({match}) =>{
            return(
                <DishDetail dish= {this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
                
                
                comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
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
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route exact path='/contact' component={Contact}/>
                        <Redirect to='/home' />
                        
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        );

    }
}


export default App;
