import React, { Component } from "react";
import {
    Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    handleLogin(event) {

        this.toggleModal(); // Ẩn đi modal

        alert("Username: " + this.userName.value + " Password: " + this.passWord.value + " Remember: " + this.remember.checked);
        
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container" >

                        <NavbarBrand className='mr-auto' href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
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
                            <Nav navbar className='ml-auto'>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="userName">Username</Label>
                                <Input type="text" id="userName" name="userName"
                                    innerRef={(input) => this.userName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="passWord">Password</Label>
                                <Input type="password" id="passWord" name="passWord"
                                    innerRef={(input) => this.passWord = input}
                                />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}
                                    />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    };
}
export default Header;