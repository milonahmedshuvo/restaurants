import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  console.log(image_hosting_api)





  const onSubmit = async (data) => {
    console.log(data);
    const imageData = { image: data.image[0]}
 
    const res = await axiosPublic.post(image_hosting_api, imageData, {
        headers: {
            "content-Type" : "multipart/form-data"
        }
    })


    console.log(res.data)
    console.log(res.data.data.display_url)
    

  };






  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       




        <label className="form-control w-full my-4">
  <div className="label">
    <span className="label-text">Category name*</span>
  </div>

  <input type="text" {...register("name")} placeholder="Type category name here" className="input input-bordered w-full " />

</label>



{/*Two div category and price here  */}
<div className="flex gap-2">
    {/* category  */}
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Category select*</span>
  </div>

  <select defaultValue="category" {...register("category")} className="select select-bordered w-full ">
          <option disabled value='default' > Select Category </option>
          <option value='Pizza'>Pizza</option>
          <option value='Salad' >Salad</option>
          <option value='Soup'>Soup</option>
          <option value='Drinks'>Drinks</option>
          <option value='Dessert'>Dessert</option>
        </select>

</label>

    {/* price  */}

    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">price*</span>
  </div>

  <input type="number" {...register("price")} placeholder="Type category name here" className="input input-bordered w-full " />

</label>
</div>




{/* recepe here  */}
<label className="form-control">
  <div className="label">
    <span className="label-text">Category recepe*</span>
  </div>
  <textarea {...register('recepe')} className="textarea textarea-bordered h-24" placeholder="Recepe datails"></textarea>
  
</label>





<input {...register("image")} type="file" className="file-input w-full max-w-xs mt-10 mb-3" />


        
<div>
<button type="submit" className="btn btn-accent w-2/12"> Add item </button>
</div>
        

        
      </form>
    </div>
  );
};

export default AddItem;
