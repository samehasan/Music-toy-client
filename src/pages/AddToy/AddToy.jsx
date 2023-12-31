/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddToy.css";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hooks/usetitle";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  useTitle('AddToy-MusicToys');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("https://music-toy-server-samehasan.vercel.app/post-Toy", {
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
              defaultValue="https://www.shutterstock.com/image-photo/baby-blue-guitar-on-white-260nw-47290795.jpg"
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
