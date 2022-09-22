import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Navbar/Nav";

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Nav></Nav>
                    <Routes>
                        <Route path="*" element={<h1>404 PAGE</h1>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
