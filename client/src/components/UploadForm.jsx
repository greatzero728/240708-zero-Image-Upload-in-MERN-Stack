// client/src/components/UploadForm.jsx
import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    description: "",
    image: null,
    percentOfPresale: "",
    amountOfBuy: Array(24).fill(""),
    twitter: "",
    telegram: "",
    website: "",
  });

  const handleChange = (e) => {
    if (e.target.name.startsWith("amountOfBuy")) {
      const index = parseInt(e.target.name.split("-")[1], 10);
      const newAmountOfBuy = [...formData.amountOfBuy];
      newAmountOfBuy[index] = e.target.value;
      setFormData({ ...formData, amountOfBuy: newAmountOfBuy });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key])); // Convert array to JSON string
      } else {
        data.append(key, formData[key]);
      }
    }

    axios
      .post("http://localhost:5000/upload", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Symbol:
        </label>
        <input
          type="text"
          name="symbol"
          value={formData.symbol}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image:
        </label>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Percent of Presale:
        </label>
        <input
          type="number"
          name="percentOfPresale"
          value={formData.percentOfPresale}
          onChange={handleChange}
          step="0.01"
          min="0"
          max="100"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Amount of Buy:
        </label>
        <div className="grid grid-cols-3 gap-4">
          {formData.amountOfBuy.map((value, index) => (
            <input
              key={index}
              type="number"
              name={`amountOfBuy-${index}`}
              value={value}
              onChange={handleChange}
              step="0.01"
              min="0" // Prevent negative values
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Twitter:
        </label>
        <input
          type="text"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Telegram:
        </label>
        <input
          type="text"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Website:
        </label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
