import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



const Category = () => {
  return (
    <>
       <SectionTitle subheading={"---From 11.00am to 10.00pm---"} heading={"ORDER ONLINE"} ></SectionTitle>

      <section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-6 mt-10"
      >
        <SwiperSlide>
            <img src={image1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>salads</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>sopus</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>pizzas</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>dessers</h3>
        </SwiperSlide>

        <SwiperSlide>
            <img src={image5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>salads</h3>
        </SwiperSlide>
        
      </Swiper>
      </section>
    </>
  )
}

export default Category
