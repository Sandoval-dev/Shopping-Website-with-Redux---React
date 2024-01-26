import React from 'react'
import Slider from 'react-slick'

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-200 px-6 m-5'>
          <div className=''>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-xl my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-500 text-white'>İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d7704ed-3fbc-4cd8-a19c-c7fe3c628371/air-jordan-1-low-se-ayakkab%C4%B1s%C4%B1-483BGL.png" />
        </div>
        <div className='!flex items-center bg-gray-200 px-6 m-5'>
          <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-xl my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-500 text-white'>İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/519b2b47-807e-4abf-917e-95ad69d219de/air-jordan-1-low-se-craft-ayakkab%C4%B1s%C4%B1-mT5vr2.png" />
        </div>
      </Slider>
    </div>
  )
}

export default SliderComp