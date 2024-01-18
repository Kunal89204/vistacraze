import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import SignINBgimg from '../assets/WhatsApp Image 2023-11-30 at 17.32.51_14f7a7c8.jpg'
import { SimpleFooter } from "@/widgets/layout";

export function SignIn() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    
      let data = {
        email: Email,
        password: Password,
      };
  
      const response = await axios.post("http://localhost:5000/login", data);
      alert(response.data.message);
      console.log(response.data);
      if (response.data.message === "Login Successful") {
        alert(response.data.message);
        navigate("/home");  
        // Perform any additional actions for successful login if needed
      } else {
        alert("Invalid email or password. Please try again.");
        // You might also consider clearing the password field here
      }
    
  }
  



  return (
    <>
      <img
        src={SignINBgimg}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50 " />
      <div className="container mx-auto p-4 ">
        <Card className="absolute top-2/4 mt-24 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
           <Input
           variant="standard"
           label="Email"
            type="email"
            size="lg"
            value={Email}
            onChange={handleEmailChange}
           />
          
            <Input
              variant="standard"
              type="password"
              label="Password"
              size="lg"
              value={Password}
              onChange={handlePasswordChange}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleLogin}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignIn;
