import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Wikisearch from "../../components/Wikisearch/Wikisearch";


export default function App() {
  // const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <Wikisearch />


      {/* {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes></Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )} */}
    </main>
  );
}
