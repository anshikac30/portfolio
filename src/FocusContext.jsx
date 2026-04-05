import React, { createContext, useState, useContext } from 'react';

const FocusContext = createContext();

export const FocusProvider = ({ children }) => {
  const [focusedId, setFocusedId] = useState(null);

  const toggleFocus = (id, e) => {
    // Prevent dragging from firing a click by checking event if needed
    // But simple toggle is fine for now
    if (focusedId === id) {
      setFocusedId(null);
    } else {
      setFocusedId(id);
    }
  };

  return (
    <FocusContext.Provider value={{ focusedId, toggleFocus }}>
      {children}
    </FocusContext.Provider>
  );
};

export const useFocus = () => useContext(FocusContext);
