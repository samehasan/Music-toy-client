
const ToygalaryDetails = ({ toy }) => {
  return (
    <div>

      {/* id: 8,
        seller: "Olivia Moore",
        toyName: "Tambourine",
        subCategory: "Percussion Instruments",
        price: 12,
        availableQuantity: 9,
        image: "tambourine.jpg", */}

      <h2>{toy.toyName}</h2>
      <img src={toy.image}  />
      <p>{toy.subCategory}</p>
      <p>Description: {toy.seller}</p>
      <p>Price: {toy.price}</p>
      <p>Available Quantity :{toy.availableQuantity}</p>
      {/* Add more details here as needed */}
    </div>
  );
};

export default ToygalaryDetails;
