/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { useState } from "react"
import { useFetchData } from "../hooks/useData"

const DashboardController = () => {
  const [response, setResponse] = useState('')

  // usefetch
  const { response: responseData, error: errorData, loading } = useFetchData({
    url: `/api/product?keyword=&price=10000,250000&page=1&limit=10&order=product_name,ASC`,
    method: 'GET',
    body: null
  })

  useEffect(() => {
    if (responseData) {
      const arrayData = responseData.map((val) => val.data.list)
      setResponse(arrayData)
    }
  }, [responseData])

  const handleClickDetail = (val) => {
    // val.preventDefault()
    console.log("val", val)
    history(`/product/${val.id}`)
  }

  return { response, errorData, loading, handleClickDetail }
  
}

export default DashboardController