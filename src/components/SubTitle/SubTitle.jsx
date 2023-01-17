export default function SubTitle(props) {
  return (
    <h3 className="sub_title">
      {props.subTitle}
        <SpanTitle spanName="Fernandes" />
    </h3>
  );
}

function SpanTitle(props) {
  return <span className="sub_title_span">{props.spanName}</span>;
}
