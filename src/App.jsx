import React from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./components/home/home.jsx";
import Search from "./components/search/search.jsx";
import Support from "./components/support/support.jsx";
import Info from "./components/info/info.jsx";
import Lounge from "./components/lounge/lounge.jsx";
import Travelers from "./components/travelers/travelers.jsx";
import Subscribers from "./components/subscribers/subscribers.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Search />
            <Support />
            <Info />
            <Lounge />
            <Travelers />
            <Subscribers />
            <Footer />
        </div>
    );
};

export default App;