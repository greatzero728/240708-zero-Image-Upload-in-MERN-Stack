//client\src\App.jsx
import React from "react";
import UploadForm from "./components/UploadForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Upload Image</h1>
        <UploadForm />
      </div>
    </div>
  );
};

export default App;
