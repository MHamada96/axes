import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Nav from "./Navbar/Nav";

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/Home" element={<HomePage />}></Route>
                        <Route path="*" element={<h1>404 PAGE</h1>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
