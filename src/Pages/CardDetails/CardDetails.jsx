import { useEffect, useState } from "react";
import checkOutLogo from "../../assets/images/checkout/checkout.png";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { IoCloseCircle } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoReturnUpBack } from "react-icons/io5";

const CardDetails = () => {
    const [orders, setOrders] = useState([]);
    const url = 'http://localhost:5000/orders';
    useEffect(() => {
        // Fetch orders from the server
        // You can replace this URL with your actual API endpoint
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])




    const App = () => {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">My Orders</h1>
                <OrdersTable orders={orders} />
            </div>
        );
    };
    return (
        <div>
            <Navbar></Navbar>

            <div className="w-full px-4 md:px-0 md:w-[90%] lg:w-[1140px] h-[200px] md:h-[250px] lg:h-[300px] mx-auto mt-5 relative">
                <p className="absolute z-10 text-white text-2xl md:text-3xl lg:text-[45px] font-bold top-1/4 md:top-1/3 left-4 md:left-8 lg:left-22 font-inter">
                    Card Details
                </p>
                <div className="relative w-full h-full">
                    <img
                        className="rounded-[10px] w-full h-full object-cover brightness-75"
                        src={checkOutLogo}
                        alt="Service Details"
                    />
                </div>
            </div>

            <div className="w-[1140px] mx-auto mt-9">
                <table>
                    <tbody className="">
                        {
                            orders.map((order) => (
                                <tr key={order.id} className="hover:bg-white mt-2 w-[1140px] h-[150px] flex items-center justify-between px-4">
                                    <div className="flex items-center gap-4">
                                        <IoCloseCircle className="text-[#444444] w-[40px] h-[40px]" />
                                        <td><img className="w-[150px] h-[150px] rounded-[10px]" src={order.serviceImgUrl} alt="" /></td>
                                    </div>
                                    <td className="text-[20px] font-semibold text-[#444444] font-inter">{order.serviceName}</td>
                                    <td className="text-[20px] font-semibold font-inter text-[#444444]">{order.servicePrice}</td>
                                    <td className="font-medium text-[20px] text-[#2D2D2D] ">{order.order_date}</td>
                                    <button className="w-[120px] h-[48px] bg-[#FF3811] rounded-[20px] text-white font-semibold text-[20px] ">Pending</button>
                                </tr>

                            )
                            )
                        }
                    </tbody>

                </table>
            </div>

            <div className="w-[1140px] mx-auto p-5 flex justify-between items-center mt-10">
                <button className="flex gap-1 items-center">
                    <IoReturnUpBack className="w-[18px] h-[16px] text-[#444444]"></IoReturnUpBack>
                    <h1 className="font-inter text-[20px] text-[#444444]">Continue Shopping</h1>
                </button>
                <button className="flex gap-1 items-center">
                    <RiDeleteBin6Line className="w-[18px] h-[16px] text-[#444444]"/>

                    <h1 className="font-inter text-[20px] text-[#444444]">Clear Shopping Cart</h1>
                </button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CardDetails;