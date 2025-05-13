import './globals.css'
import Button from '@/components/button/Button';
import Header from '@/components/header/Header';
import React from 'react';
const HomePage = () => {
  return (
    <div className="container">
      <Header title="Welcome to the Coding Conf 2025" subtitle="Request your ticket now!" />
      <Button link="/demo-one">Get Your Ticket</Button>
    </div>
  );
};

export default HomePage;
