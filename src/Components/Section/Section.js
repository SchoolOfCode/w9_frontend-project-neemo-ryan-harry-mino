const Section = (props) => {

  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      
    </div>
  );
};
export default Section;
