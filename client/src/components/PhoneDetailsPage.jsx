function PhoneDetailsPage(props) {
  const {
    imageFileName,
    name,
    manufacturer,
    color,
    processor,
    ram,
    screen,
    description,
  } = props.phoneDetails;
  return (
    <div>
      <img
        src={`../../images/${imageFileName}`}
        alt={`${name}`}
        style={{ width: "200px" }}
      />

      <p>Brand : {manufacturer}</p>
      <p>Color : {color}</p>
      <p>Processor : {processor}</p>
      <p>Ram : {ram}</p>
      <p>Screen : {screen}</p>
      <p style={{ width: "600px", display: "inline-block" }}>{description}</p>
    </div>
  );
}

export default PhoneDetailsPage;
