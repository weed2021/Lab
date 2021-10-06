import React from "react";
import {Card, CardImg, CardBody, CardTitle} from "reactstrap";

    function RenderMenuItem({dish,onClick}){
        return(
            <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag='h5'>{dish.name}</CardTitle>
                </CardBody>
                <button onClick={()=>onClick(dish)}  className="btn btn-primary">See Details</button>
            </Card>
        );
    }

    const Menu = (props) =>{
        const menu = props.dishes.map((dish)=>{
            return (
                <div key = {dish.id} className="col-12 col-md-3 mt-4">
                    <RenderMenuItem dish={dish} onClick = {props.onClick} />
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



export default Menu;