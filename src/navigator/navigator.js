import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu} from 'reactstrap';
import { NavLink  } from "react-router-dom";

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
                        <NavLink exact  className="nav-link" to="/">
                        ГЛАВНАЯ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink  className="nav-link" to="/about">
                        ОБО МНЕ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink  className="nav-link" to="/services">
                        УСЛУГИ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink  className="nav-link" to="/trainings">
                        ОБУЧЕНИЕ
                        </NavLink >

                    </NavItem>

                    <NavItem>
                        <NavLink  className="nav-link" to="/prices">
                        ЦЕНЫ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink  className="nav-link" to="/contact">
                        КОНТАКТЫ
                        </NavLink >

                    </NavItem>
                </Nav>

            </div>
        );
    }
}