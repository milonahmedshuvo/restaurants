import img1 from '../../../assets/home/chef-service.jpg'



const Bistroboss = () => {

  return (
    <div  className={`justify-center  bg-no-repeat bg-cover bg-center w-full h-[500px] relative my-20 `} style={{backgroundImage: `url(${img1})`}}>
       
          <div className='bg-white text-center w-10/12 px-20 py-20 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2' >
            <h3 className='text-3xl'>Bistro Boss</h3>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi delectus sequi? Rem similique laudantium repudiandae itaque saepe inventore Lorem ipsum dolor sit amet consectetur adipisicing elit.repudiandae itaque saepe inventore repellendus repudiandae itaque saepe inventore repellendus?</p>
          </div>
    </div>
  )
}

export default Bistroboss
