const Products = ({product}) => {
    const { image, name, price } = product;
    return (
           <div className='w-[364px] h-[389px] shadow-xl p-4 bg-[#FFFFFF] rounded-[10px]'>
            <div className='rounded-2xl w-[314px] h-[208.01px] mx-auto'>
                <img className='w-[326px] h-[215px]  rounded-[10px] bg-[#F3F3F3]'
                    src={image} 
                    alt={name} 
                />
            </div>
            <div className='p-4 text-center pt-15'>
                <h1 className='text-[25px] font-inter text-[#444444] font-bold '>{name}</h1>
                <p className='text-[#FF3811] font-semibold text-[20px] font-inter'>${price}</p>
            </div>
        </div>
    );
};

export default Products;