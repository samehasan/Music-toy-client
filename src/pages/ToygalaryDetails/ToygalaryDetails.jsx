import "./ToygalaryDetails.css"
const ToygalaryDetails = ({ toy }) => {
  return (
    <div>

      <h2>{toy.title}</h2>
      <div className="col-md-6">
          <img className="img-d" src={toy.image} alt="" />
        </div>
      <p>{toy.subCategory}</p>
      <p>seller: {toy.seller}</p>
      <p>Price: {toy.price}</p>
      <p>Available Quantity :{toy.quantity}</p>
      {/* Add more details here as needed */}
    </div>
  );
};

export default ToygalaryDetails;
