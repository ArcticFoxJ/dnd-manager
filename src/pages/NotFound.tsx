import { useEffect } from 'react'
import PageProps from 'pages/PageProps'

const NotFound = ({setTitle}: PageProps) => {

  useEffect(() => {
    setTitle("404 Not Found")
  }, [])

  return (
    <div>
      Oops
    </div>
  )
}

export default NotFound
