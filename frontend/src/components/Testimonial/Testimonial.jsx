import React from 'react';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AlexJohnson from '../../assets/images/AlexJohnson.png';
import MariaDavis from '../../assets/images/MariaDavis.png';
import JohnSmith from '../../assets/images/JohnSmith.png';
import EmmaWilliams from '../../assets/images/EmmaWilliams.png';
import {HiStar} from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}>
        <SwiperSlide>
  <div className='py-[30px] px-5 rounded-3'>
    <div className='flex items-center gap-[13px]'>
      <img src={AlexJohnson} className="rounded-lg" alt="" />
      <div>
        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
          Alex Johnson
        </h4>
        <div className="flex items-center gap-[2px]">
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
        </div>
      </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
      "The medical services provided were top-notch. The staff was professional and caring, making my experience very positive."
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='py-[30px] px-5 rounded-3'>
    <div className='flex items-center gap-[13px]'>
      <img src={MariaDavis} className="rounded-lg" alt="" />
      <div>
        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
          Maria Davis
        </h4>
        <div className="flex items-center gap-[2px]">
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
        </div>
      </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
      "I had a few challenges navigating the health services initially, but the support team was very helpful and guided me through the process."
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='py-[30px] px-5 rounded-3'>
    <div className='flex items-center gap-[13px]'>
      <img src={EmmaWilliams} className="rounded-lg" alt="" />
      <div>
        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
          Emma Williams
        </h4>
        <div className="flex items-center gap-[2px]">
          <HiStar className="text-yellowColor w-[18px] h-5" />
          <HiStar className="text-yellowColor w-[18px] h-5" />
        </div>
      </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
      "The health services were satisfactory. There's room for improvement, but overall, it was a decent experience."
    </p>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className='py-[30px] px-5 rounded-3'>
    <div className='flex items-center gap-[13px]'>
      <img src={JohnSmith} className="rounded-lg" alt="" />
      <div>
        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
          John Smith
        </h4>
        <div className="flex items-center gap-[2px]">
          <HiStar className="text-yellowColor w-[18px] h-5" />
        </div>
      </div>
    </div>
    <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
      "I was not entirely satisfied with the health services. The staff was friendly, but the wait times were longer than I expected."
    </p>
  </div>
</SwiperSlide>

        
      </Swiper>
    </div>
  )
}

export default Testimonial