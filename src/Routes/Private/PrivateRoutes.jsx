import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500">
            </div>
        </div>;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" />;

};

export default PrivateRoutes;