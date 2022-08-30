import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/videos/:id" element={<Video />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
