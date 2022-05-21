import React from 'react';
import './Container.css';

const Container = ({ children }) => {
  return <section className="container">{children}</section>;
};

export default Container;