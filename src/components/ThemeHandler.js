import React, { useEffect } from 'react';

const ThemeHandler = () => {
  useEffect(() => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;
    document.body.style.backgroundColor = isNight ? '#222' : '#fff';
    document.body.style.color = isNight ? '#fff' : '#000';
  }, []);

  return null; // This component doesn't render anything
};

export default ThemeHandler;
