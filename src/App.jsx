import React from 'react';
import Form from './components/Form';

const App = () => {
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-900">
  <div className="w-full max-w-2xl px-4">
    <h1 className="text-2xl font-bold mb-4 flex justify-center text-white">Contact Us</h1>
    <Form />
  </div>
</div>

  );
};

export default App;
