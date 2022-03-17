import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import '../estilos.css';
import '../estilos-pokemon.css';
import pikachu from "../pokemon.png"



const Login = () => {
	console.log("qaa")
  //state
  const [errorMessage, setErrorMessage] = useState(false);
  const [sucessfulLogin, setSucessfulLogin] = useState(false);

  // si ya esta logeado, carga home
  const token = localStorage.getItem("token");
  if (token) {
    return <Redirect to="/inicio" />;
  }
  //fetch token function
  const ValidateLogin = async (credentials) => {
    try {
      const response = await axios.post(
        "http://challenge-react.alkemy.org/",
        credentials
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      // si todo ok, redirecciona a home
      setSucessfulLogin(true);
      //
    } catch {
      setErrorMessage(true);
    }
  };
  //validate form functions
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Email invalido";
    }
    return error;
  };
  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Requerido";
    }
    return error;
  };
  const loginAsGuest = () => {
    const token = "guest";
    localStorage.setItem("token", token);
    setSucessfulLogin(true);
  };

  return (
    
    <div className='container'>
        <div className=' card-login'>
            {errorMessage && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Email o contraseña incorrectos.
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setErrorMessage(false)}
                  ></button>
            </div>
          )}
        <div className=" login">
          <div id="form">
            <h1 className="title text-center">Pokeapi</h1>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                ValidateLogin(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Enviar
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          </div>
        
          {sucessfulLogin && <Redirect to="/inicio" />}
              
        </div>
        <div className='card-invitado'>
              <div className='btn-invitado-card'>
                  <button
                    className="btn btn-dark loginAsGuest "
                    onClick={() => loginAsGuest()}
                  >
                    Ingresar como invitado
                  </button>
            </div>
            <div className='img-card'>
                <img className='img-login' src={pikachu}></img>
            </div>
      </div>
      
      
</div>

  );
};
export default Login;
