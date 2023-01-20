import { useHistory } from "react-router-dom"
import { Input, Form } from "./styled/Form";
import { Div } from "./styled/Div";
import { useForm } from "../hooks/useForm";


function Login({ handleUpdateUser }) {

  const { formData, handleChange } = useForm({
    user: "",
    password: ""
  })
  
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateUser(formData.user)
    history.push("/schedule")
}

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="user">Username: </label>
        <Input id="user" name="user" onChange={handleChange}/>
        <label htmlFor="pw">Password: </label>
        <Input type="password" id="pw" name="password" onChange={handleChange}/>
        <Input type="submit" value="Login" />
      </Form>
    </Div>
  );
}

export default Login;
