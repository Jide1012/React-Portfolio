import React, {useState} from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Nav from "./components/Nav";


import "./App.css"



function App() {
  const [page,setPage]=useState("about")
  return (
    <>
    <Header setPage={setPage}/>
    <Project page={page}/>
    <Footer/>
    
    </>
    

    
  );
}

export default App;
