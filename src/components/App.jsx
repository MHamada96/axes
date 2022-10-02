import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientsPage from "./ClientsPage/ClientsPage";
import HomePage from "./HomePage/HomePage";
import ServicesPage from "./SercvicesPage/ServicesPage";
import TeamPage from "./TeamPage/TeamPage";
import WorkPage from "./WorkPage/WorkPage";
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

                        <Route path="*" element={<h1>404 PAGE</h1>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
