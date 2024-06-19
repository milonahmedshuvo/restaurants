import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

// react ratting
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subheading="----What our client say----"
        heading={"testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((item) => (
          <SwiperSlide key={item._id} className="px-20 mt-6">
            <div className="flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180, marginBottom: "10px" }}
                value={item.rating}
                readOnly
              />

              <p className="text-center">{item.details}</p>
              <p className="uppercase text-center text-2xl text-orange-400">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
