import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { Button } from "../UI/Button/Button"

export default class Navigation extends Component {
  logoutHandler = () => {
    const { logoutUser } = this.props
    logoutUser()
    this.props.history.push("/login")
  }

  render() {
    const { token } = this.props
    return (
      <Wrapper>
        <NavLinks>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </li>
        </NavLinks>
        <LogoutWrapper>
          {token ? (
            <Button buttonType="success" onClick={this.logoutHandler}>
              Logout
            </Button>
          ) : null}
        </LogoutWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #009996;
  margin-bottom: 100px;
  padding: 0 15px;
`

const LogoutWrapper = styled.div`
  align-self: center;
`

const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-right: 1rem;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`
