import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
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
import { SimpleFooter } from "@/widgets/layout";
import SignINBgimg from '../assets/WhatsApp Image 2023-11-30 at 17.32.51_14f7a7c8.jpg'
import axios from "axios";

export function SignUp() {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [contact, setContact] = useState();
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangeContact = (e) => {
    setContact(e.target.value);
  }

  const signup = async () => {
    try {
      let data = {
        Contact_No: contact,
        password: Password,
        name: Name,
        email: Email
      };

      const resp = await axios.post("http://localhost:5000/signup", data);
      alert(resp.data.message);
      console.log(resp.data);

      if (resp.data.message === "User created successfully!") {
        alert(resp.data.message);
        navigate("/sign-in");  // Use the navigate function
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }
  


  return (
    <>
      <img
        src={SignINBgimg}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full mt-28 max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className=" grid h-16 w-44  place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input variant="standard" label="Name" size="lg" value={Name} onChange={handleChangeName} />
            <Input variant="standard" type="email" label="Email" size="lg" value={Email} onChange={handleChangeEmail} />
            <Input variant="standard" type="contact" label="Phone no" size="lg" value={contact} onChange={handleChangeContact} />
            <Input
              variant="standard"
              type="password"
              label="Password"
              size="lg"
              value={Password}
              onChange={handleChangePassword}
            />

            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0 ">
            <Button variant="gradient" fullWidth type="submit"className="-ml-0" onClick={signup}>
              Sign Up 
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
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

export default SignUp;
