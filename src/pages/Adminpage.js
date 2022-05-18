import Signup from "../components/admin/Signup";
import Signin from "../components/admin/Signin";



const Adminpage = () => {
  return (
    <>
      <div className="signup-signin-container">
        <Signup />
        <Signin />
      </div>
    </>
  );
};

export default Adminpage;
