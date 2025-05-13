'use client'; // Enables client-side interactivity in Next.js 13+ App Router

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For programmatic routing
import Header from '@/components/header/Header'; // Reusable Header component
import Input from '@/components/input/Input';   // Reusable Input component
import Button from '@/components/button/Button'; // Reusable Button component

const TicketRequestPage = () => {
  // Local state to store user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const router = useRouter(); // Next.js hook for navigation

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    // Navigate to the confirmation page with query parameters
    router.push(`/demo-two?name=${name}&email=${email}`);
  };

  return (
    <div className="container">
      {/* Page Header */}
      <Header
        title="Request Your Coding Conf 2025 Ticket"
        subtitle="Fill in your details below"
      />

      {/* Ticket Request Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto' }}>
        {/* Name Input Field */}
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email Input Field */}
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Submit Button */}
        <Button type="submit">Request Ticket</Button>
      </form>
    </div>
  );
};

export default TicketRequestPage;
