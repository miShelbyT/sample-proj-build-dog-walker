import { useForm } from "../hooks/useForm";
import { Input, Form } from "./styled/Form";
import { Div } from "./styled/Div";

function Schedule({ currentUser }) {
  const { formData, reset, handleChange } = useForm({
    "dog-name": "",
    date: new Date().toISOString().slice(0,-8),
    "walk-length": "",
    "walk-with-dogs": "yes"
  });

  const fourWeeks = new Date(Date.now() + (12096e5 * 2)).toISOString().slice(0,-8)
  console.log(fourWeeks)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:3001/walks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const resp = await res.json();
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Div>
      <h3>Hi {currentUser}, wanna schedule a dog walk?</h3>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="user">Dog Name: </label>
        <Input
          id="user"
          name="dog-name"
          value={formData["dog-name"]}
          onChange={handleChange}
        />
        <label htmlFor="date">Date: </label>
        <Input
          type="datetime-local"
          min={formData.date}
          max={fourWeeks}
          step="900"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="walk-length">
          Length of Walk (in 15 minute increments):{" "}
        </label>
        <Input
          type="number"
          step="15"
          min="15"
          max="60"
          id="walk-length"
          name="walk-length"
          value={formData["walk-length"]}
          onChange={handleChange}
        />
        <Input type="submit" value="Schedule" />
        <label htmlFor="other-dogs">
          Is your dog socialized? Can he/she be walked with other dogs?
        </label>
        <div className="radio">
          <label>
            <input type="radio" value="yes" name="walk-with-dogs" checked={formData["walk-with-dogs"] === "yes"} onChange={handleChange}/>
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="no" name="walk-with-dogs" checked={formData["walk-with-dogs"] === "no"} onChange={handleChange}/>
            No
          </label>
        </div>
      </Form>
    </Div>
  );
}

export default Schedule;
