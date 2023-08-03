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
      history('/dashboard')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responseRegis])

  // handleclick
  const handleClickRegis = (e) => {
    e.preventDefault()
    setReqBody({
      ...reqBody,
      email: email,
      name: firstName,
      password: password,
      phone: phone
    })
    setStartFetch(true)
    console.log('check startfetch', reqBody);
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
    handelClickShow,
    setEmail,
    setLastName,
    setFirtsName,
    setPassword,
    setPasswordConfirmation,
    setPhone,
    history,
    handleClickRegis
  }
}

export default RegisController