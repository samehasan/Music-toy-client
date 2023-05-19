/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { handleToyUpdate } = props;
  //   console.log(handleToyUpdate);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center w-100 m-auto"
          id="contained-modal-title-vcenter"
        >
          Update Toy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className="container text-center"
          onSubmit={handleSubmit(handleToyUpdate)}
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="text-input"
            {...register("title")}
            placeholder="Name"
            defaultValue={props?.Toy?.title}
          />
          <input
            className="text-input d-none"
            {...register("_id")}
            value={props?.Toy?._id}
          />

          <input
            className="text-input"
            {...register("price", { required: true })}
            placeholder="price"
            defaultValue={props?.Toy?.price}
          />
           <input
              className="text-input"
              {...register("description")}
              placeholder="description"
            />
             <input
              className="text-input"
              {...register("Available")}
              placeholder="available product"
            />
          <input
            className="text-input"
            {...register("rating", { required: true })}
            placeholder="rating"
            defaultValue={props?.Toy?.rating}
          />
        
      
          <input
            className="text-input"
            {...register("image")}
            placeholder="image link"
            type="url"
            defaultValue={props?.Toy?.image}
          />
          
          <input className="submit-btn" value="Update Toy" type="submit" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <button className="bg-danger">Update</button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateToyModal;
