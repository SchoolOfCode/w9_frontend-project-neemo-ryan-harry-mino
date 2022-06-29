import "./Card.css";
const Card = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <p>{props.aboutSection}</p>
      <div>
        <button onClick={() => props.navigate(props.path)}>CLICK ME</button>
      </div>
    </div>
  );
};
export default Card;
