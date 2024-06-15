import { Link } from "react-router-dom"

const Register = (props) => {
  return (
    <button className={`${props["data-className"]} rounded-md bg-blue-500 text-white text-semibold border border-black  text-xl`}>
      <Link to='/register'>Register</Link>
    </button>
  )
}
export default Register