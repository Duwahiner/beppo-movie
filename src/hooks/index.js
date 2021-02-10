import { useState, useEffect } from 'react'

export const useUrl = () => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    const paht = window.location.pathname
    setUrl(paht)
  }, [setUrl])

  return [url, setUrl]
}
