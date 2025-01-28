import { Link } from 'react-router-dom'

const stype404 = {
  
}

const ErrorPage = () => {
  return (
    <>
      <div className="container page404">
        <h1>404</h1>
        <Link to='/'>Go back to Home</Link>

      </div>
    </>
  )
}

export default ErrorPage