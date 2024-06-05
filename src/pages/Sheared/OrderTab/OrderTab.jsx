import FoodCart from "../../../components/FoodCart/FoodCart";

const OrderTab = ({items}) => {


    return (
        <div className="grid grid-cols-3 gap-10">
        {
            items.map((item) => <FoodCart key={item._id} item={item} ></FoodCart>)
        }
        </div>
    );
};

export default OrderTab;