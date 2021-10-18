import React from "react";
import { Card, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./Loadingcomponent";
import { baseUrl } from "../shared/baseUrl";


function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <CardImg src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle tag='h5'>{dish.name}</CardTitle>
            </CardBody>
            <Link to={`/menu/${dish.id}`}><button className="btn btn-primary">See Details</button></Link>

        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-3 mt-4">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb className='col-md-12'>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row" >
                    {menu}
                </div>
            </div>
        );
    }

}



export default Menu;