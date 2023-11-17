import { useContext } from "react";
import { Button } from "react-bootstrap";
import { MyContext } from "../context";

const Stage2 = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>Le perdant est : </h3>
        <div>{context.state.result}</div>
      </div>
      <Button className="action_button" onClick={() => context.resetGame()}> Terminer </Button>
      <Button className="action_button" onClick={() => context.getNewLooser()}> Nouveau Perdant </Button>
    </>
  );
};

export default Stage2;
