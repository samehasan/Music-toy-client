import "./ToygalaryDetails.css"
const ToygalaryDetails = ({ toy }) => {
  return (
    <div className="d1">
<div>  <img className="img-d" src={toy.image} alt="" /></div>
      <div><h2>Name :  {toy.title}</h2>
      <h3>Category :  {toy.status}</h3>
    <p>Rating : {toy.rating}</p>
  
  <p>seller Name: {toy.seller}</p>
  <p>Price: {toy.price}</p>
  <p>Available Quantity :{toy.quantity}</p>
  <p>Description : {toy.description}</p>
  <p>Seller Email:{toy.postedBy}</p></div>
      {/* Add more details here as needed */}
    </div>
  );
};

export default ToygalaryDetails;
// title
// "p4"
// price
// "1000"
// quantity
// "5"
// rating
// "3"
// status
// "Guitar"
// image
// "https://easydrawingguides.com/wp-content/uploads/2020/08/how-to-draw-a…"
// postedBy
// "samehasan25@gmail.com"
// seller
// null
// description
// "sdgd fgsdgvv fdd"
// skills
// null