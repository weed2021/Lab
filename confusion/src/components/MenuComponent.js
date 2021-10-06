import React,{Component} from "react";
import {Card, CardImg, CardBody, CardTitle} from "reactstrap";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key = {dish.id} className="col-12 col-md-3 mt-4">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle tag='h5'>{dish.name}</CardTitle>
                        </CardBody>
                        <button onClick={()=>this.props.onClick(dish)}  className="btn btn-primary">See Details</button>
                    </Card>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row" >
                        {menu}
                </div>

                
            </div>
        );
    }
}

export default Menu;