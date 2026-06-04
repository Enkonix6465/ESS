import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import AerospaceDefense from "./pages/AerospaceDefense";
import AIService from "./pages/AIService";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import ApplicationForm from "./pages/ApplicationForm";
import Automotive from "./pages/Automotive";
import BankingFinance from "./pages/BankingFinance";
import Careers from "./pages/Careers";
import CloudSolutions from "./pages/CloudSolutions";
import CognitiveOperations from "./pages/CognitiveOperations";
import ContactUs from "./pages/ContactUs";
import DataAnalytics from "./pages/DataAnalytics";
import Education from "./pages/Education";
import Healthcare from "./pages/Healthcare";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import ITConsulting from "./pages/ITConsulting";
import Manufacturing from "./pages/Manufacturing";
import Mission from "./pages/Mission";
import NetworkSolutions from "./pages/NetworkSolutions";
import RetailEcommerce from "./pages/RetailEcommerce";
import Services from "./pages/Services";
import SoftwareTraining from "./pages/SoftwareTraining";
import Telecom from "./pages/Telecom";
import Values from "./pages/Values";
import Vision from "./pages/Vision";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route
          path="/services/application-development"
          element={<ApplicationDevelopment />}
        />
        <Route
          path="/services/cognitive-operations"
          element={<CognitiveOperations />}
        />
        <Route path="/services/data-analytics" element={<DataAnalytics />} />
        <Route
          path="/services/network-solutions"
          element={<NetworkSolutions />}
        />
        <Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route
          path="/services/software-training"
          element={<SoftwareTraining />}
        />
        <Route path="/services/ai-service" element={<AIService />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/bankingfinance" element={<BankingFinance />} />
        <Route path="/retailecommerce" element={<RetailEcommerce />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/telecom" element={<Telecom />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/education" element={<Education />} />
        <Route path="/aerospacedefense" element={<AerospaceDefense />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/values" element={<Values />} />
        <Route path="/apply/:jobTitle" element={<ApplicationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}
