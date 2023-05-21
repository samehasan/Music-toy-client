/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddToy.css";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../provider/AuthProvider";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("http://localhost:5000/post-Toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };
 
//   console.log(user);
  return (
    <div className="add-Toy-container flex justify-center">
     
        <div className="col-md-6">
          <h1 className="text-center">Add your Toy</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="text-input"
              {...register("title")}
              placeholder="Toy Name"
             
            />

            <input
              className="text-input"
              {...register("price", { required: true })}
              placeholder="price"
              
            />
            <input
              className="text-input"
              {...register("quantity", { required: true })}
              placeholder="quantity"
              
            />
            <input
              className="text-input"
              {...register("rating", { required: true })}
              placeholder="rating"
             
            />
          
            <select className="text-input" {...register("status")}>
              <option value="Piano">Piano</option>
              <option value="Guitar">Guitar</option>
              <option value="Drums">Drums</option>
            </select>
            <input
              className="text-input"
              {...register("image")}
              placeholder="image link"
              type="url"
              defaultValue="https://easydrawingguides.com/wp-content/uploads/2020/08/how-to-draw-a-piano-featured-image-1200-940x1024.png"
            />
           
            <input
              className="text-input"
              value={user?.email}
              {...register("postedBy")}
              placeholder="your email"
              type="email"
            />
           <input
              className="text-input"
              {...register("seller")}
              placeholder="Seller Name"
            />
            <input
              className="text-input"
              {...register("description")}
              placeholder="description"
            />
            <input className="submit-btn" value="Add Toy" type="submit" />
          </form>
        </div>
       
      
    </div>
  );
};

export default AddToy;
