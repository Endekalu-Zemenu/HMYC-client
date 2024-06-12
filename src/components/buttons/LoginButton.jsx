import { Link } from "react-router-dom"

const Login = (props) => {
  return (
    <button className={`${props["data-className"]} rounded-xl bg-transparent border border-white dark:border-white border-transparent text-white text-xl`}>
      <Link to='/login'>Login</Link>
    </button>
  )
}
export default Login