import { useState } from "react";
import Items from "./components/Items";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mx-auto p-4">
          <Items />
          <div className="card"></div>
        </div>
      </div>
    </>
  );
}

export default App;
