import React, { useState, useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { useAccount } from "wagmi";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("./Section"));
const About = React.lazy(() => import("../../component/About"));
const Services = React.lazy(() => import("../../component/Services"));
const Features = React.lazy(() => import("../../component/Features"));
const Pricing = React.lazy(() => import("../../component/Pricing"));
const Clients = React.lazy(() => import("../../component/Clients"));
const Blog = React.lazy(() => import("../../component/Blog"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));
const Dashboard = React.lazy(()=>import("../../component/Dashboard"))
const AdminDashboard = React.lazy(()=>import("../../component/AdminDashboard"))
// import { Spinner } from "reactstrap";


const Layout_1 = () => {
  const[isConnected,setIsConnected] = useState(false);
  const adminAddress = "0x65Bdd9E6040cB1047429aFAc01487783b6e69c51"
  const [navItems, setNavItems] = useState([
    { id: 1, idnm: "home", navheading: "Home" },
    { id: 3, idnm: "services", navheading: "Services" },
    { id: 4, idnm: "features", navheading: "Features" },
  ]);
  const [pos, setPos] = useState(document.documentElement.scrollTop);
  const [imglight, setImgLight] = useState(true);
  const [navClass, setNavClass] = useState("navbar-light navbar-custom sticky sticky-dark");

  useEffect(() => {
    const scrollNavigation = () => {
      var scrollup = document.documentElement.scrollTop;
      if (scrollup > pos) {
        setNavClass("nav-sticky navbar-light navbar-custom sticky sticky-dark");
        setImgLight(false);
      } else {
        setNavClass("navbar-light navbar-custom sticky sticky-dark");
        setImgLight(true);
      }
      setPos(scrollup);
    };
    window.addEventListener("scroll", scrollNavigation, true);
    return () => window.removeEventListener("scroll", scrollNavigation, true);
  }, [pos]);
  const { address, isConnecting, isDisconnected } = useAccount()

  useEffect(()=>{
    if(address!==undefined){
      setIsConnected(true);
    }else{
      setIsConnected(false);
    }
  })
  //set preloader div
  const PreLoader = () => {
    if(isConnected){
      
    }
    return (
      <div id="preloader">
        <div id="status">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
      </div>
    );
  };
  if(!isConnected){
    return (
      <React.Fragment>
        <Suspense fallback={<PreLoader />}>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
          {/* Importing Navbar */}
          <Navbar navItems={navItems} navClass={navClass} imglight={imglight} />
  
          {/* Importing Section */}
          <Section />
  
          {/* Importing Services */}
          <Services />
  
          {/* Importing Features */}
          <Features />
  
          {/* Importing Footer */}
          <Footer />
        </Suspense>

      </React.Fragment>
    );
  }else if(isConnected && address!==adminAddress){
    return (
      <React.Fragment>
        <Suspense fallback={<PreLoader />}>
          {/* Importing Navbar */}
          <Navbar navItems={navItems} navClass={navClass} imglight={imglight} />
  
          {/* Importing Section */}
          <Dashboard />
  
          {/* Importing Services */}
          <Services />
  
          {/* Importing Features */}
          <Features />
  
          {/* Importing Footer */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }else if(isConnected && address===adminAddress){
    return (
      <React.Fragment>
        <Suspense fallback={<PreLoader />}>
          {/* Importing Navbar */}
          <Navbar navItems={navItems} navClass={navClass} imglight={imglight} />
  
          {/* Importing Section */}
          <AdminDashboard />
  
          {/* Importing Services */}
          <Services />
  
          {/* Importing Features */}
          <Features />
  
          {/* Importing Footer */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }

};

export default Layout_1;
