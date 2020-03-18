import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import styled from "styled-components"
import { withFormik } from "formik"
import * as Yup from "yup"

import { Input, Checkbox } from "../UI/Input/Input"
import { Button } from "../UI/Button/Button"
import { login } from "../../store/actions/todos"

class Login extends Component {
  state = {
    referrer: "",
  }

  render() {
    const {
      values,
      handleChange,
      handleSubmit,
      errors,
      isSubmitting,
    } = this.props
    const { referrer } = this.state

    if (referrer) return <Redirect to={referrer} />

    return (
      <form action="" onSubmit={handleSubmit}>
        <Wrapper>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <span style={{ color: "red", display: errors ? "block" : "none" }}>
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
          <span style={{ color: "red", display: errors ? "block" : "none" }}>
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
          onClick={() => {
            handleSubmit()
            this.setState({ referrer: "/" })
          }}
        >
          Submit
        </Button>
      </form>
    )
  }
}

const FormikLogin = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "12345678",
    agree: false,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "password must have 6 characters"),
    agree: Yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
  }),

  handleSubmit: (values, { setSubmitting, setErrors, resetForm }) => {
    setTimeout(() => {
      if (values.email === "test@test.ru") {
        setErrors({ email: "That email is already taken" })
        console.log(values)
      } else {
        console.log(values.email, values.password)
        login(values.email, values.password)
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  },
})(Login)

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }
}

export default connect(null, mapDispatchToProps)(FormikLogin)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
