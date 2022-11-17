import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Textarea from "../components/Textarea";
import Form from '../components/Form';
import Navbar from '../components/Navbar';
// import Preview from "./Preview";
import Dashboard from "../components/Dashboard";
import Podetails from "../components/Podetails";
import Invoicedetails from "../components/Invoicedetails";
import PrivateRoutes from "./privateRoutes";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import Finalinvoice from "../components/Finalinvoice";

const Routers = () => {
    return (
        <>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Form heading="SignUp"/> } />
        <Route path="/login" element={<PrivateRoutes><Login heading="Login"/></PrivateRoutes>} />
        <Route path="/textarea" element={<PrivateRoutes><Textarea heading="Enter the text to analyze below"/></PrivateRoutes>} />
        {/* <Route path="/preview" element={<Preview />}/> */}
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>}/>
        <Route path="/podetails" element={<PrivateRoutes><Podetails /></PrivateRoutes>}/>
        <Route path="/invoicedetails" element={<PrivateRoutes><Invoicedetails /></PrivateRoutes>}/>
        <Route path="/edit" element={<PrivateRoutes><Edit /></PrivateRoutes>}/>
        <Route path="/finalinvoice" element={<PrivateRoutes><Finalinvoice /></PrivateRoutes>} />
        </Routes>
        </>
    );
};

export const BEFORE_LOGIN_ROUTES = ["/sign-up", "/login"];
export default Routers;