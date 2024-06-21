import React, { useState, useEffect } from 'react';
import LoadingSpinner from "../src/components/loading/Loading"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <LoadingSpinner loading={loading} />}
      {!loading && (
        <div>
          <Main />
        </div>
      )}
    </div>
  );
};

export default App;