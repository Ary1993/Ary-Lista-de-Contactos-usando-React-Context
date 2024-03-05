import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Importar Componentes
import { Footer } from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";

import injectContext from "./store/appContext.js";
//Importar Vistas
import Home from "./views/home.jsx"
import { TodoListFetch } from "./views/TodoListFetch.jsx";
import { TodoList } from "./views/TodoList.jsx";
import { UserDetails } from "./views/UserDetails.jsx";
import { Characters } from "./views/Characters.jsx";
import { Planets } from "./views/Planets.jsx";
import { Starships } from "./views/Starships.jsx";
import { Contact } from "./views/Contact.jsx";

export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <h1 className="text-center text-primary">React Router DOM</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/todolist-fetch" element={<TodoListFetch />} />
                    <Route path="/user/:id" element={<UserDetails />} />
                    <Route path="/todolist" element={<TodoList />} />
                    <Route path="*" element={<h1>404 - Not found!</h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );

};

export default injectContext(Layout);

