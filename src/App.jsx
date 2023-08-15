import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientsPage from "./pages/ClientsPage/ClientsPage";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/SercvicesPage/ServicesPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/Home" element={<HomePage />}></Route>
                        <Route path="/Work" element={<WorkPage />}></Route>
                        <Route
                            path="/Clients"
                            element={<ClientsPage />}
                        ></Route>
                        <Route
                            path="/Services"
                            element={<ServicesPage />}
                        ></Route>
                        <Route path="/Ourteam" element={<TeamPage />}></Route>
                        <Route
                            path="/contact-us"
                            element={<h1>Contactus</h1>}
                        ></Route>
                        <Route
                            path="/about-us"
                            element={<AboutUsPage></AboutUsPage>}
                        ></Route>
                        <Route path="*" element={<h1>404 PAGE</h1>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
