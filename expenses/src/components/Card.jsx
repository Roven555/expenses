import "./Card.css";

const Card = (props) => {
  // See rida liidab 'card' ja väljast tuleva klassi (nt 'expenses')
  const classes = "card " + (props.className || "");

  return (
    <div className={classes}>
      {/* ILMA SELLETTA ON LEHT TÜHI */}
      {props.children}
    </div>
  );
};

export default Card;
