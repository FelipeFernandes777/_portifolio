export default function Icons(props) {
  return (
    <div className="icons_container">
      <a href={props.href}>
        <span className="icons">{props.icons}</span>
        <span className="text">{props.text}</span>
      </a>
    </div>
  );
}
