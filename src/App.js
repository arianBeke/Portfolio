// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage";


// function App() {
//   return (
//     <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//           </Routes>
//         </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage"; // Import your AboutPage component
import ProjectsPage from "./components/ProjectsPage"; // Import your ProjectsPage component
import ContactPage from "./components/ContactPage"; // Import your ContactPage component
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} /> {/* Add AboutPage route */}
            <Route path="/ProjectsPage" element={<ProjectsPage />} /> {/* Add ProjectsPage route */}
            <Route path="/ContactPage" element={<ContactPage />} /> {/* Add ContactPage route */}
            <Route path="/Skills" element={<Skills />} /> {/* Add ContactPage route */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
