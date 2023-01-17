export default function Card(props) {
  return (
    <div className="cards_main_container">
      <div className="image_card_container">
        <a href={props.card_href}>
          <img src={props.card_src} alt={props.card_alt} className="img_card" />
        </a>
      </div>
      <div className="sub_title_card_container">
        <div className="sub_title_container">
          <span className="sub_title">{props.card_title}</span>
        </div>
      </div>
    </div>
  );
}
