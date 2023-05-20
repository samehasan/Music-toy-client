import { useState } from "react";
import ToygalaryDetails from "../ToygalaryDetails/ToygalaryDetails";
import "../Toygalarys/Toygalarys.css"
const Toygalarys = () => {
  
  const toys = [
   
      {
        id: 1,
        seller: "John Doe",
        toyName: "Mini Keyboard",
        subCategory: "Keyboards",
        price: 25,
        availableQuantity: 3,
        image: "mini_keyboard.jpg",
      },
      {
        id: 2,
        seller: "Jane Smith",
        toyName: "Guitar",
        subCategory: "String Instruments",
        price: 30,
        availableQuantity: 5,
        image: "guitar.jpg",
      },
      {
        id: 3,
        seller: "Michael Johnson",
        toyName: "Drum Set",
        subCategory: "Drums",
        price: 50,
        availableQuantity: 2,
        image: "drum_set.jpg",
      },
      {
        id: 4,
        seller: "Emily Wilson",
        toyName: "Xylophone",
        subCategory: "Percussion Instruments",
        price: 15,
        availableQuantity: 10,
        image: "xylophone.jpg",
      },
      {
        id: 5,
        seller: "David Thompson",
        toyName: "Microphone",
        subCategory: "Vocal Instruments",
        price: 20,
        availableQuantity: 6,
        image: "microphone.jpg",
      },
      {
        id: 6,
        seller: "Sarah Anderson",
        toyName: "Trumpet",
        subCategory: "Brass Instruments",
        price: 35,
        availableQuantity: 4,
        image: "trumpet.jpg",
      },
      {
        id: 7,
        seller: "Alex Davis",
        toyName: "Piano Mat",
        subCategory: "Miscellaneous",
        price: 18,
        availableQuantity: 7,
        image: "piano_mat.jpg",
      },
      {
        id: 8,
        seller: "Olivia Moore",
        toyName: "Tambourine",
        subCategory: "Percussion Instruments",
        price: 12,
        availableQuantity: 9,
        image: "tambourine.jpg",
      },
      {
        id: 9,
        seller: "Daniel Clark",
        toyName: "Maracas",
        subCategory: "Percussion Instruments",
        price: 8,
        availableQuantity: 12,
        image: "maracas.jpg",
      },
      {
        id: 10,
        seller: "Sophia Martinez",
        toyName: "Accordion",
        subCategory: "Keyboards",
        price: 45,
        availableQuantity: 1,
        image: "accordion.jpg",
      },
  ]
  const [selectedToy, setSelectedToy] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(toys);

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
      toy.toyName.toLowerCase().includes(query)
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
            <div key={toy.id} className="card">
              <img src={toy.image} alt={toy.toyName} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{toy.toyName}</h3>
                <p className="card-subcategory">{toy.subCategory}</p>
                <p className="card-price">Price: ${toy.price}</p>
                <p className="card-quantity">Available Quantity: {toy.availableQuantity}</p>
                <button onClick={() => handleViewDetails(toy)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <ToygalaryDetails toy={selectedToy} />
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
};

    export default Toygalarys;
