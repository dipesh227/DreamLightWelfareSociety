import React from 'react';
import ReactDOM from 'react-dom/client';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', color: 'red', fontSize: '24px' }}>
      <h1>Test App Running!</h1>
      <p>If you see this, React is working.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<TestApp />);