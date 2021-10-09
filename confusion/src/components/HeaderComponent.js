import React,{Component} from "react";
import {Navbar, NavbarBrand, Jumbotron, Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false
        };

        this.toogleNav=this.toogleNav.bind(this)
    }
    toogleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container" >
                        
                        <NavbarBrand className='mr-auto' href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toogleNav} />
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem className='px-3'>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home'></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className='px-3'>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem className='px-3'>
                                    <NavLink className='nav-link' to='/menu'>
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem className='px-3'>
                                    <NavLink className='nav-link' to='/contact'>
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </React.Fragment>
        );
    };
}
export default Header;