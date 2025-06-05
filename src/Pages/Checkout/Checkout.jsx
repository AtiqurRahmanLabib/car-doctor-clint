import { useContext } from "react";
import checkOutLogo from "../../assets/images/checkout/checkout.png";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const { _id, img, title, price } = service;
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const form = e.target;
        const name = form.firstName.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const orderDetails = {
            serviceId: _id,
            serviceName: title,
            serviceImgUrl: img,
            servicePrice: price,
            customer_name: name,
            customer_email: email,
            customer_number: phone,
            order_date: date,
            customer_message: message,
        };
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log("Order placed successfully:", data);
                form.reset(); // Reset the form after successful submission
                navigate("/home"); // Redirect to orders page
                
                // Add success notification here
            })
            .catch(error => {
                console.error("Error placing order:", error);
                // Add error notification here
            });

        // You can send this data to your server or handle it as needed
        console.log(orderDetails);
        // For demonstration, we'll just log it
        console.log("Form submitted");
    };
    return (
        <div className="overflow-x-hidden">
            <Navbar />

            {/* Hero Banner Section */}
            <div className="w-full px-4 md:px-0 md:w-[90%] lg:w-[1137px] h-[200px] md:h-[250px] lg:h-[300px] mx-auto mt-5 relative">
                <p className="absolute z-10 text-white text-2xl md:text-3xl lg:text-[45px] font-bold top-1/4 md:top-1/3 left-4 md:left-8 lg:left-22 font-inter">
                    Check Out
                </p>
                <div className="relative w-full h-full">
                    <img
                        className="rounded-[10px] w-full h-full object-cover brightness-75"
                        src={checkOutLogo}
                        alt="Service Details"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#151515] to-[#151515] opacity-50 mix-blend-multiply"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#FF3811] w-[80%] sm:w-[296px] h-[40px] sm:h-[49.3px] mx-auto top-2/3 mt-8 sm:mt-12.5">
                    <h1 className="font-inter font-medium text-sm sm:text-[20px] text-white">
                        Home/Checkout
                    </h1>
                </div>
            </div>

            {/* Checkout Form Section */}
            <div className="bg-[#F3F3F3] w-full px-4 md:px-0 md:w-[90%] lg:w-[1140px] h-auto py-8 md:py-12 lg:h-[700px] rounded-[10px] mx-auto mt-8 md:mt-12 lg:mt-16 flex items-center justify-center">
                <div className="w-full md:w-[946px] mx-auto">
                    <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                        {/* Name Fields */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                className="w-full md:w-[461px] h-[50px] md:h-[60px] bg-white rounded-[10px] text-[#A2A2A2] text-sm md:text-[16px] font-inter px-4 md:px-5"
                                type="text"
                                name="firstName"
                                defaultValue={user?.displayName || ""}
                                placeholder="First Name"
                                required
                            />
                            <input
                                className="w-full md:w-[461px] h-[50px] md:h-[60px] bg-white rounded-[10px] text-[#A2A2A2] text-sm md:text-[16px] font-inter px-4 md:px-5"
                                type="date"
                                name="date"
                                min={new Date().toISOString().split('T')[0]}
                                placeholder="Date"
                                required
                            />
                        </div>

                        {/* Contact Fields */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                className="w-full md:w-[461px] h-[50px] md:h-[60px] bg-white rounded-[10px] text-[#A2A2A2] text-sm md:text-[16px] font-inter px-4 md:px-5"
                                type="tel"
                                name="phone"
                                placeholder="Your Phone"
                                required
                            />
                            <input
                                className="w-full md:w-[461px] h-[50px] md:h-[60px] bg-white rounded-[10px] text-[#A2A2A2] text-sm md:text-[16px] font-inter px-4 md:px-5"
                                type="email"
                                name="email"
                                defaultValue={user?.email || ""}
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <textarea
                            className="mt-4 md:mt-5 w-full h-[150px] md:h-[250px] bg-white rounded-[10px] text-[#A2A2A2] text-sm md:text-[16px] font-inter p-4 md:p-5 resize-none"
                            name="message"
                            placeholder="Your Message"
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            className="w-full h-[50px] md:h-[64px] rounded-[10px] bg-[#FF3811] mt-4 md:mt-5 font-semibold font-inter text-base md:text-[20px] text-white hover:bg-[#e0300e] transition-colors"
                            type="submit"
                        >
                            Order Confirm
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-8 md:mt-12 lg:mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default Checkout;