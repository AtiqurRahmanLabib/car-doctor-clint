import { useEffect, useState } from "react";
import checkOutLogo from "../../assets/images/checkout/checkout.png";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { IoCloseCircle } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { confirmDelete, successAlert } from "../../Components/CustomAlert/CustomAlert";
const CardDetails = () => {
    const [orders, setOrders] = useState([]);
    const url = 'http://localhost:5000/orders';

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])

   const handleDelete = async (id) => {
        const result = await confirmDelete();
        
        if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE', 
                });
                const data = await response.json();
                
                if (data.deletedCount > 0) {
                    setOrders(orders.filter(order => order._id !== id));
                    await successAlert("Order deleted successfully!");
                }
            } catch (error) {
                console.error("Delete error:", error);
            }
        }
    }


    return (
        <div>
            <Navbar></Navbar>

            {/* Hero Section */}
            <div className="w-full px-4 max-w-[1140px] h-[200px] md:h-[250px] lg:h-[300px] mx-auto mt-5 relative">
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

            {/* Orders Table */}
            <div className="w-full px-4 max-w-[1140px] mx-auto mt-9 overflow-x-auto">
                <table className="w-full">
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className="hover:bg-white mb-2 w-full min-h-[150px] flex flex-col sm:flex-row items-center justify-between p-4 border-b border-gray-200">
                                <td className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                                    <button onClick={() => handleDelete(order._id)}>
                                        <IoCloseCircle className="text-[#444444] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                                    </button>
                                    <img className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-[10px]" src={order.serviceImgUrl} alt="" />
                                </td>
                                <td className="text-[16px] sm:text-[20px] font-semibold text-[#444444] font-inter w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
                                    {order.serviceName}
                                </td>
                                <td className="text-[16px] sm:text-[20px] font-semibold font-inter text-[#444444] w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
                                    {order.servicePrice}
                                </td>
                                <td className="font-medium text-[16px] sm:text-[20px] text-[#2D2D2D] w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                                    {order.order_date}
                                </td>
                                <td className="w-full sm:w-auto text-center sm:text-left">
                                    <button className="w-full sm:w-[120px] h-[40px] sm:h-[48px] bg-[#FF3811] rounded-[20px] text-white font-semibold text-[16px] sm:text-[20px]">
                                        Pending
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Action Buttons */}
            <div className="w-full px-4 max-w-[1140px] mx-auto p-5 flex flex-col sm:flex-row justify-between items-center mt-10 gap-4">
                <Link to="/home" className="w-full sm:w-auto">
                    <button className="flex gap-1 items-center justify-center w-full">
                        <IoReturnUpBack className="w-[18px] h-[16px] text-[#444444]"></IoReturnUpBack>
                        <h1 className="font-inter text-[16px] sm:text-[20px] text-[#444444]">Continue Shopping</h1>
                    </button>
                </Link>

                <button className="flex gap-1 items-center justify-center w-full sm:w-auto">
                    <RiDeleteBin6Line className="w-[18px] h-[16px] text-[#444444]" />
                    <h1 className="font-inter text-[16px] sm:text-[20px] text-[#444444]">Clear Shopping Cart</h1>
                </button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CardDetails;