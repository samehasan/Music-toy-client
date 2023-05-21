import React, { useState, useEffect } from "react";
import ToygalaryDetails from "../ToygalaryDetails/ToygalaryDetails";
import "../Toygalarys/Toygalarys.css";
import useTitle from "../../hooks/usetitle";

const Toygalarys = () => {
  const [toys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchToys();
  }, []);
  useTitle('AllToy-MusicToys');
  const fetchToys = async () => {
    try {
      const response = await fetch("http://localhost:5000/allToys");
      const toysData = await response.json();
      setToys(toysData);
      setSearchResults(toysData);
    } catch (error) {
      console.error("Error fetching toys:", error);
    }
  };

  const handleViewDetails = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const results = toys.filter((toy) =>
      toy.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div className="toy-gallery">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by toy name"
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="card-list">
        <div className="card-grid">
          {searchResults.map((toy) => (
            <div key={toy._id} className="card">
              {/* <img src={toy.image} alt={toy.title} className="card-image" /> */}
              <div className="card-content">
                <h3 className="card-title">{toy.title}</h3>
                <p className="card-subcategory">{toy.status}</p>
                <p className="card-price">Price: ${toy.price}</p>
                <p className="card-quantity">
                  Available Quantity: {toy.quantity}
                </p>
                <button className="btn btn-success" onClick={() => handleViewDetails(toy)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
               <ToygalaryDetails toy={selectedToy} /> 
         
              <button className="btn btn-danger" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toygalarys;
