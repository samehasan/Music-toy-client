/* eslint-disable no-unused-vars */
import { FaSearch, FaArrowAltCircleDown, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import "./Banner.css";
function Banner() {
  return (
    <section className="banner-container text-black">
      <div className=" bg-light p-5">
        <div className="row d-flex justify-content-center align-items-center  banner-second-container">
          <div className="col-md-6 col-sm-12 ">
            <h4>Miniature musical instruments </h4>
            <h1 className="title mt-4">
              Have variours Categories of <br /> Musical Toys
            </h1>
         
          </div>
          <div className="col-md-6">
  <img
    className="banner-image d-none d-sm-block" // Added the d-none and d-sm-block classes
    src="https://media.istockphoto.com/id/1321762584/vector/musical-instruments-flat-retro-color-vector-icon.jpg?s=612x612&w=0&k=20&c=xWmFV7X3UIth3RHRYP0H87KR8Y5y1702WtvBjXelEvo="
    alt=""
  />
</div>

        </div>
      </div>
    </section>
  );
}

export default Banner;
