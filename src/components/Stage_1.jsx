import { useContext, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { MyContext } from "../context";
const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ""]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);
    if (validate) {
      setError([false,''])
      context.addPlayer(value)

      textInput.current.value=""
    } else {
      console.log("error");
    }
  };
  const validateInput = (value) => {
    if (value === "") {
      setError([true, "Sorry, you need to add something"]);
      return false;
    }
    if (value.length <= 2) {
      setError([true, "Sorry, you need to write 3 at least  characters"]);
      return false;
    }
    return true;
  };
  console.log(context)
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Ajouter un joueur"
            name="player"
            ref={textInput}
          />
        </Form.Group>
        {error[0] ? <Alert variant="danger">{error[1]}</Alert> : null}
        <Button className="miami" variant="primary" type="submit">
          Ajouter joueur
        </Button>
        {
          context.state.players && context.state.players.length > 0 ?
          <>
          <hr />
          <div>
            <ul className="list-group">
              {context.state.players.map((item,idx)=>(
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                  {item}
                  <span className="badge badge-danger" onClick={() => context.removePlayer(idx)}>x</span>
                </li>
              ))}
            </ul>
            <Button className="action_button"
            onClick={() => context.next()}
            > NEXT
            </Button>
          </div>
          </>
          :null
        }
      </Form>
    </>
  );
};

export default Stage1;
