import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import styled from "styled-components"
import { withFormik } from "formik"
import * as Yup from "yup"

import { login, logout } from "../../store/actions/auth"

import { Input, Checkbox } from "../UI/Input/Input"
import { Button } from "../UI/Button/Button"
import Navigation from "../Navigation/Navigation"

class Login extends Component {
  componentDidUpdate() {
    const { token } = this.props
    if (token) {
      this.props.history.push("/")
    }
  }

  render() {
    const {
      values,
      handleChange,
      handleSubmit,
      errors,
      isSubmitting,
      token,
      logoutUser,
      history,
    } = this.props

    return (
      <WrapperComponent>
        <Navigation token={token} logoutUser={logoutUser} history={history} />

        {!token ? (
          <form action="" onSubmit={handleSubmit}>
            <Wrapper>
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <span
                style={{ color: "red", display: errors ? "block" : "none" }}
              >
                {errors.email}
              </span>
            </Wrapper>
            <Wrapper>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <span
                style={{ color: "red", display: errors ? "block" : "none" }}
              >
                {errors.password}
              </span>
            </Wrapper>
            <Wrapper>
              <Checkbox>
                <label htmlFor="agree">agree</label>
                <input
                  type="checkbox"
                  name="agree"
                  checked={values.agree}
                  onChange={handleChange}
                />
              </Checkbox>
            </Wrapper>
            <Button
              buttonType={values.agree ? "success" : "default"}
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        ) : (
          <h1>Вы уже авторизованы</h1>
        )}
      </WrapperComponent>
    )
  }
}

const FormikLogin = withFormik({
  mapPropsToValues: () => {
    return {
      email: "test@test.ru",
      password: "1111",
      agree: true,
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "password must have 3 characters"),
    agree: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
  }),

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    props.login(values.email, values.password)
    resetForm()
    setSubmitting(false)
  },
})(Login)

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    logoutUser: () => dispatch(logout()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(FormikLogin))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
`

const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
