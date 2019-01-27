import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './navigator.css';
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
                <Nav className="mu-navigate" tabs>
                    <NavItem>
                        <NavLink exact className="nav-link" to="/">
                            ГЛАВНАЯ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            ОБО МНЕ
                        </NavLink >
                    </NavItem>

                    {/*<Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>*/}
                        {/*<DropdownToggle nav caret>*/}
                            {/*/!* <NavLink to="/services"> *!/*/}
                                {/*УСЛУГИ*/}
                            {/*/!* </NavLink > *!/*/}
                        {/*</DropdownToggle>*/}
                        {/*<DropdownMenu>*/}
                            {/*<DropdownItem>*/}
                                {/*<NavLink to="/services-free-lessons">*/}
                                    {/*Услиги свадебного стилиста*/}
                                {/*</NavLink >*/}
                            {/*</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem>*/}
                                {/*<NavLink to="/services-makeUp">*/}
                                    {/*Услуги визажиста-стилиста*/}
                                {/*</NavLink >*/}
                            {/*</DropdownItem>*/}
                            {/*<DropdownItem divider />*/}
                            {/*<DropdownItem>*/}
                                {/*<NavLink to="/services-merriage">*/}
                                    {/*Бесплатные уроки макияжа*/}
                                {/*</NavLink >*/}
                            {/*</DropdownItem>*/}
                        {/*</DropdownMenu>*/}
                    {/*</Dropdown>*/}
                    <NavItem>
                        <NavLink className="nav-link" to="/services">
                            УСЛУГИ
                        </NavLink >
                    </NavItem>
                   
                    <NavItem>
                        <NavLink className="nav-link" to="/trainings">
                            ОБУЧЕНИЕ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/prices">
                            ЦЕНЫ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            КОНТАКТЫ
                        </NavLink >
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/admin">
                            АДМИНИСТРИРОВАНИЕ
                        </NavLink >
                    </NavItem>
                </Nav>
            </div>
        );
    }
}