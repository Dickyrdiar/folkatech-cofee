/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useLogin"

const LoginController = () => {
  const history = useNavigate()
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [reqBody, setReqBody] = useState({
    email: "",
    password: ""
  })
  const [startFetch, setStartFetch] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  // handleClick hide and show
  const handleClickShow = () => setShow(!show)

  // useFetch to login
  const { response: responseLogin, error: errorLogin, loading, headersResponse } = useFetch({
    startFetching: startFetch,
    url: '/api/login',
    method: 'POST',
    body: reqBody
  })

  useEffect(() => {
    if (responseLogin) {
      setResponse(responseLogin)
      localStorage.setItem("token", responseLogin?.data?.token)
      setTimeout(() => {
        window.location.assign('/dashboard')
      }, 500)
      console.log('check respoonse', responseLogin?.data?.token);
    }
    setStartFetch(false)
  }, [responseLogin, headersResponse])



  useEffect(() => {
    if (errorLogin.code === 400) {
      setError(errorLogin)
    }
    setStartFetch(false)
  }, [errorLogin])

 


  // handle button login
  const handleClickLogin = (e) => {
    e.preventDefault()
    setReqBody({
      ...reqBody,
      email: email,
      password: password
    })
    setStartFetch(true)
  }

  return { show, 
    email, 
    password, 
    handleClickShow, 
    setEmail, 
    setPassword,
    errorLogin,
    loading,
    handleClickLogin,
    response,
    history,
    error
  }
}

export default LoginController