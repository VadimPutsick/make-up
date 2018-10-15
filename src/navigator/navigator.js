import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Navigator extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>

                <Nav pills>
                    <NavItem>
                        <Link to="/">
                            <NavLink>
                                ГЛАВНАЯ
                </NavLink>
                        </Link>
                    </NavItem>

                    <NavItem>

                        <Link to="/about">

                            <NavLink >ОБО МНЕ</NavLink>

                        </Link>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">УСЛУГИ</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">ОБУЧЕНИЕ</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">ЦЕНЫ</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">КОНТАКТЫ</NavLink>
                    </NavItem>
                </Nav>

            </div>
        );
    }
}