const Cardcomponent = (props) => {
return (
    <div className={props.className}>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.aboutSection}
        </p>
    </div>
)
}
export default Cardcomponent