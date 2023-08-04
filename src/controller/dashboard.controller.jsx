/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import { useFetchData } from "../hooks/useData"

const DashboardController = () => {
  const [response, setResponse] = useState('')


  // usefetch
  const { response: responseData, error: errorData, loading } = useFetchData({
    url: 'api/produc',
    method: 'GET',
    body: null
  })

  useEffect(() => {
    if (responseData) {
      setResponse(responseData)
    }
  }, [responseData])

  return { response }
  
}

export default DashboardController