import { useState } from "react";
import { Link } from "react-router-dom";
import "./Toy.css"

const Toy = ({ toy }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    id,
    title,
    price,
    description,
    image,
    skills,
    rating,
  } = toy || {};

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="Toy col-md-12 col-sm-12 col-lg-6">
      <div className="row d-flex justify-content-center align-items-center single-card">
        <div className="col-md-4">
          <img className="w-100" src={image} alt="" />
        </div>
        <div className="col-md-8 card-right">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="all-skils d-flex flex-wrap justify-content-around align-items-center">
            {skills?.map((skill) => (
              <button className="bg-dark text-white p-1" key={skill.id}>
                {skill?.value}
              </button>
            ))}
          </div>
          <div className="card-footer text-start p-4 mt-3 d-flex justify-content-between">
            <div className="div">price: {price} BDT</div>
          </div>
          <div className="d-flex justify-content-around">
            <p>rating: {rating}</p>
          </div>
          <div className="text-end">
            <button onClick={handleModalToggle}>View Details</button>
          </div>
        </div>
      </div>

      {showModal && (
  <div className="modal w-100">
    <div className="modal-dialog modal-xl modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" onClick={handleModalToggle}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img className="w-50" src={image} alt="" />
          <h2>{title}</h2>
          <p>{description}</p>
          {/* Render additional toy details in the modal */}
          {/* Example: */}
          <p>Price: {price} BDT</p>
          <p>Rating: {rating}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Toy;
