import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload file');
        }
    };

    return (
        <div className="file-upload-container">
            <h1 className="upload-heading">GFG File Uploads</h1>
            <form className="file-upload-form" onSubmit={handleSubmit}>
                <input type="file" 
                    onChange={handleFileChange} 
                    className="file-input" />
                <button type="submit" className="upload-button">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default FileUpload;
