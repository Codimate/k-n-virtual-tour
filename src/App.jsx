import { useState } from "react";
import Login from "./pages/Login";
import Tour from "./pages/Tour";

export default function App() {
  const [authenticated, setAuthenticated] =
  useState(false);

  if (!authenticated) {
    return (
      <Login
        onLogin={() =>
          setAuthenticated(true)
        }
      />
    );
  }

  return <Tour />;
}