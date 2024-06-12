import { BackgroundBeamsDemo } from "./Home/BackgroundBeams";
import { SignupFormDemo } from "./SignUp/SignupFormDemo.jsx";

const Register = () => {
  return (
    <div>
      <BackgroundBeamsDemo type={<SignupFormDemo />}/>
    </div>
  )
}
export default Register