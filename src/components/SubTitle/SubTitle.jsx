export default function SubTitle(props) {
  return (
    <h3 className="sub_title">
      {props.subTitle}
      <span className="sub_title_span">
        <SpanTitle spanName="Fernandes" />
      </span>
    </h3>
  );
}

function SpanTitle(props) {
  return <span>{props.spanName}</span>;
}
