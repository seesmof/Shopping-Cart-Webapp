import { useState } from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 w-full">
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl mx-auto p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="card col-span-1 aspect-square"></div>
            <div className="card col-span-1 aspect-square"></div>
            <div className="card col-span-1 aspect-square"></div>
            <div className="card col-span-1 aspect-square"></div>
          </div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
}

export default App;
