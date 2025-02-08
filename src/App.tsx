import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from "./pages/home";
import About from "./pages/about";
import Index from "./pages/services/communicationSkills/commsIndex";
import HrIndex from "./pages/services/HR/hrIndex";
import ContactUs from "./pages/contact";
import CustomerExperienceIndex from "./pages/services/customerExperience/csIndex";
import LeadershipManagementIndex from "./pages/services/leadershipManagement/lmIndex";
import PersonalDevelopmentIndex from "./pages/services/personalDevelopment/pdIndex";
import ProfessionalCertificationIndex from "./pages/services/professionalCertificationCourses/pcIndex";
import JohnMaxwellTrainings from "./pages/services/johnMaxwellTrainings/jmIndex";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact-us" element={<ContactUs />} />
                  <Route path="/communication-skills" element={<Index />} />
                  <Route path="/hr" element={<HrIndex />} />
                  <Route path="/customer-experience-trainings" element={<CustomerExperienceIndex />} />
                  <Route path="/leadership-and-management" element={<LeadershipManagementIndex />} />
                  <Route path="/personal-development-courses" element={<PersonalDevelopmentIndex />} />
                  <Route path="/professional-certificate-courses" element={<ProfessionalCertificationIndex />} />
                  <Route path='/john-maxwell-trainings' element={<JohnMaxwellTrainings />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;