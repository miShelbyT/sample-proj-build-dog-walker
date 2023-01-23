import { useHistory, Link } from "react-router-dom"
import { Input, Form } from "./styled/Form";
import { Div } from "./styled/Div";
import { useForm } from "../hooks/useForm";


function Login({ handleUpdateUser }) {

  // instead of POST we need a GET to check to see if we have a name and password that match. then save that user.name as the currentUser. If no match, send them to /users/new to sign up.

  const { formData, handleChange } = useForm({
    user: "",
    password: ""
  })
  
  const history = useHistory()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const resp = await res.json();
      handleUpdateUser(resp.user)
      history.push("/schedule")
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="user">Username: </label>
        <Input id="user" name="user" value={formData.user} onChange={handleChange}/>
        <label htmlFor="pw">Password: </label>
        <Input type="password" id="pw" name="password" value={formData.password} onChange={handleChange}/>
        <Input type="submit" value="Login" />
      </Form>
      <p>Don't have an account? No worries! Click <Link to="/users/new"><span>here</span></Link> to create an account.</p>
    </Div>
  );
}

export default Login;
