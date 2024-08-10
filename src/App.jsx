import { useEffect } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
function App() {
  useEffect(() => {
    document.title = "Nerd Nest";
    <Navigate to="/signin" />;
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ position: "absolute", top: "50%", right: "50%" }}>
                  <Link to="/signin">
                    <button>sign in</button>
                  </Link>
                  <Link to="/signup">
                    <button>sign up</button>
                  </Link>
                </div>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Signin />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;