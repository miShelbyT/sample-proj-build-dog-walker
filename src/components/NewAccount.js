import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Form, Input } from "./styled/Form";
import { Div } from "./styled/Div";

function NewAccount({ handleUpdateUser }) {
  const { formData, handleChange } = useForm({
    user: "",
    password: "",
    "confirm-password": "",
    "number-of-dogs": "",
    "dog-info": ""
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      user: formData.user,
      password: formData.password,
      "number-of-dogs": Number(formData["number-of-dogs"]),
      "dog-info": formData["dog-info"]
    }
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resp = await res.json();
      handleUpdateUser(resp.user);
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="user">Username: </label>
        <Input
          required
          id="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
        />
        <label htmlFor="pw">Password: </label>
        <Input
          required
          type="password"
          id="pw"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="pw2">Confirm Password: </label>
        <Input
          required
          type="password"
          id="pw2"
          value={formData["confirm-password"]}
          name="confirm-password"
          onChange={handleChange}
        />
        <label htmlFor="number-of-dogs">
          How Many Dogs Do You Currently Have:{" "}
        </label>
        <Input
          required
          type="number"
          min="1"
          id="number-of-dogs"
          value={formData["number-of-dogs"]}
          name="number-of-dogs"
          onChange={handleChange}
        />
        <label htmlFor="dog-info">Tell us more: </label>
        <Input
          required
          as="textarea"
          id="dog-info"
          value={formData["dog-info"]}
          name="dog-info"
          onChange={handleChange}
        />
        <Input type="submit" value="Create Account" />
      </Form>
    </Div>
  );
}

export default NewAccount;
