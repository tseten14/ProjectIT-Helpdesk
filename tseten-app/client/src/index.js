import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

createRoot(document.getElementById("root")).render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
