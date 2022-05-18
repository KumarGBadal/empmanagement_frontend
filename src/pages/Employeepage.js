import Signin from "../components/employee/Signin";
import Signup from "../components/employee/Signup";


const Employeepage = () => {
  return (
    <>
      <div className="signup-signin-container">
        <Signup />
        <Signin />
      </div>
    </>
  );
};

export default Employeepage;
