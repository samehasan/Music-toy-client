
const ToygalaryDetails = ({ toy }) => {
  return (
    <div>

      {/* id: 8,
        seller: "Olivia Moore",
        toytitle: "Tambourine",
        subCategory: "Percussion Instruments",
        price: 12,
        availableQuantity: 9,
        image: "tambourine.jpg", */}

      <h2>{toy.title}</h2>
      <div classtitle="col-md-4">
          <img classtitle="w-100" src={toy.image} alt="" />
        </div>
      <p>{toy.subCategory}</p>
      <p>seller: {toy.seller}</p>
      <p>Price: {toy.price}</p>
      <p>Available Quantity :{toy.availableQuantity}</p>
      {/* Add more details here as needed */}
    </div>
  );
};

export default ToygalaryDetails;
