import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const MenuWrapper = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
`

const MenuItem = styled.li`
    float: left;
`

const MenuLink = styled(NavLink)`
    display: block;
    color: white;
    text-align: center;
    padding: 0.90em 1em;
    text-decoration: none;
    &:hover {
        background-color: #111;
    }
`

const Nav = styled.nav`
    margin-bottom: 3.7em;
`

const Menu = (props) => {
    const { links } = props;
    return (
        <Nav>
            <MenuWrapper>
                {links.map(link => (
                <MenuItem key={link.path}>
                    <MenuLink to={link.path} activeStyle={{ 'backgroundColor': '#4CAF50' }}>
                        {link.title}
                    </MenuLink>
                </MenuItem>
                ))}
            </MenuWrapper>
        </Nav>
    )
}

export default Menu;
