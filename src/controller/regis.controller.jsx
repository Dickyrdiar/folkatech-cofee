/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useLogin"

const RegisController = () => {
  const history = useNavigate()
  const [show, setShow] = useState(false)
  const [firstName, setFirtsName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [phone, setPhone] = useState("")
  const [reqBody, setReqBody] = useState({
    name: "",
	  email: "",
	  password: "",
	  phone: ""
  })
  const [startFetch, setStartFetch] = useState(false)

  // handleClick
  const handelClickShow = () => setShow(!show)

  // useFetch
  const { response: responseRegis, error: errorRegis, loading } = useFetch({
    startFetching: startFetch,
    url: '/api/register',
    method: 'POST',
    body: reqBody
  })

  useEffect(() => {
    if (responseRegis) {
      history('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseRegis])



  // handleclick
  const handleClickSave = (e) => {
    e.preventDefault()
    localStorage.setItem('email', email)
    localStorage.setItem('first name', firstName + ' ' + lastName)
    history('/register-password')
  }

  

  const handleClickRegis = (e) => {
    e.preventDefault()
    setReqBody({
      ...reqBody,
      email: localStorage.getItem('email'),
      name: localStorage.getItem('first name'),
      password: password,
      phone: phone
    })
    setStartFetch(true)
  }


  return {
    show,
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    reqBody,
    phone,
    loading,
    handelClickShow,
    setEmail,
    setLastName,
    setFirtsName,
    setPassword,
    setPasswordConfirmation,
    setPhone,
    history,
    handleClickRegis,
    handleClickSave
  }
}

export default RegisController