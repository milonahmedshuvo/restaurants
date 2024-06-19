import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";


const UpateManageItem = () => {
    const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const eashMenu = useLoaderData()
  const {name, category, price, recipe, _id } = eashMenu
  console.log("loder data", eashMenu)



  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    console.log(data);
    const imageData = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageData, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    // console.log(res.data);
    // console.log(res.data.data.display_url);
    const manuItems = {
      name: data.name,
      recipe: data.recepe,
      category: data.category,
      price: parseFloat(data.price),
      image: res.data.data.display_url
    }
    // upate manu item data in database using axiosSecure 
    const menuUpdate = await axiosSecure.patch(`/menu/${_id}`, manuItems)
    console.log("post res", menuUpdate.data)
    if(menuUpdate.data.modifiedCount > 0){
      Swal.fire({
        title: `${name} is update succes`,
        text: "That thing is still around?",
        icon: "question"
      });
      reset()
    }

  };








    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text">Category name*</span>
            </div>
  
            <input
              type="text"
              defaultValue={name}
              {...register("name")}
              placeholder="Type category name here"
              className="input input-bordered w-full "
            />
          </label>
  
          {/*Two div category and price here  */}
          <div className="flex gap-2">
            {/* category  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category select*</span>
              </div>
  
              <select
                defaultValue={category}
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  {" "}
                  Select Category{" "}
                </option>
                <option value="Pizza">Pizza</option>
                <option value="Salad">Salad</option>
                <option value="Soup">Soup</option>
                <option value="Drinks">Drinks</option>
                <option value="Dessert">Dessert</option>
              </select>
            </label>
  
            {/* price  */}
  
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">price*</span>
              </div>
  
              <input
                type="number"
                defaultValue={price}
                {...register("price")}
                placeholder="Type category name here"
                className="input input-bordered w-full "
              />
            </label>
          </div>
  
          {/* recepe here  */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Category recepe*</span>
            </div>
            <textarea
              {...register("recepe")}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Recepe datails"
            ></textarea>
          </label>
  
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs mt-10 mb-3"
          />
  
          <div>
            <button type="submit" className="btn btn-accent w-2/12">
              {" "}
              Add item{" "}
            </button>
          </div>
        </form>
      </div>
    );
};

export default UpateManageItem;