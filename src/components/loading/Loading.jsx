import "./Loading.css"
import React from 'react';
import { ClipLoader } from 'react-spinners';

export default function LoadingSpinner({ loading }) {
  return (
    <div className={`spinner-container ${loading ? 'show' : 'hide'}`}>
      <ClipLoader loading={loading} size={150} color="#34bdbd" />
    </div>
  );
};