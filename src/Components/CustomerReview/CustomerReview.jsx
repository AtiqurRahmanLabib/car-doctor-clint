import React from 'react';

const CustomerReview = ({ description }) => {
    const { image, name, job_title, review } = description;
    console.log(description);
    return (
        <div>
      <div className='w-[558px] h-[349px] border shadow-2xl border-[#F3F3F3] rounded-[10px]'>
        <div className='flex mt-5 gap-5 p-5'>
          <div>
            <img className='w-[60px] h-[60px] rounded-full' src={image} alt="" />
          </div>
          <div className='grid'>
            <h1 className='font-bold font-inter text-[25px] text-[#444444]'>{name}</h1>
            <p className='font-inter font-semibold text-[20px] text-[#737373]'>{job_title}</p>
          </div>
        </div>
        <div className='mt-5 mx-5'>
          <p className='font-inter text-[16px] text-[#737373]'>{review}</p>
        </div>
      </div>
    </div>
    );
};

export default CustomerReview;