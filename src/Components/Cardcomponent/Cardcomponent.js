const Cardcomponent = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <p>{props.aboutSection}</p>
      <button onClick={() => props.navigate(props.path)}>CLICK ME</button>
    </div>
  );
};
export default Cardcomponent;
