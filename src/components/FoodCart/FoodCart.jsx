const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
       
       <p className="bg-slate-900 px-4 absolute right-0 mr-4 mt-4 text-white">{price}</p>


      <div className="card-body flex flex-col">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
