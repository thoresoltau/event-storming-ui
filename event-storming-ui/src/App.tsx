import React from 'react';
import DraggableElement from './components/DraggableElement';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Event Storming UI</h1>
      <DraggableElement />
    </div>
  );
};

export default App;