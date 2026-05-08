import React, {useContext, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/home";
import NoPage from "./pages/nopage";
import AuthPage from "./pages/Authpage";
import {AuthContext} from "./context/AuthProvider";
import Resgister from "./pages/Register";
import Footer from "./components/Footer";

import BookPage from "./pages/BookPage";
import BookForm from "./pages/BookForm";
import AuthorPage from "./pages/AuthorPage";
import CategoryPage from "./pages/CategoryPage";
import PublisherPage from "./pages/PublisherPage";

function App() {
  const { getUserInfo } = useContext(AuthContext)
  useEffect(() => {
    getUserInfo();
    
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<Resgister />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id/edit" element={<BookForm />} />
          <Route path="/authors" element={<AuthorPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/publishers" element={<PublisherPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
