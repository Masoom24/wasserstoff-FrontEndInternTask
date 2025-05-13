import React from 'react';
import styles from './TicketCard.module.css';

// Define the props interface for the component

interface TicketCardProps {
  name: string;
  email: string;
  eventName: string;
  additionalInfo?: string; // optional info that may or may not be passed
}
// Functional component using React.FC with TypeScript props
const TicketCard: React.FC<TicketCardProps> = ({
  name,
  email,
  eventName,
  additionalInfo,
}) => {
  return (
    // Wrapper for the entire ticket card
    <div className={styles.ticketWrapper}>
      
      {/* Header Section */}
      <div className={styles.heading}>
        <h2>Congrats, <span>{name}</span>!</h2>
        <p>Your ticket is ready.</p>

        {/* Email note with optional additional information */}
        <p className={styles.emailNote}>
          We've emailed your ticket to <span>{email}</span><br />
          {additionalInfo && (
            <span className={styles.additionalInfo}>
              {additionalInfo}
            </span>
          )}
        </p>
      </div>

      {/* Ticket body */}
      <div className={styles.ticket}>
        {/* Left section of the ticket */}
        <div className={styles.left}>
          <h3>{eventName}</h3>

          {/* Current formatted date */}
          <p>
            {new Date().toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </p>

          {/* User info with avatar */}
          <div className={styles.user}>
            <img
              src="/images/profile-logo.png" // Static avatar image
              alt={name}
              className={styles.avatar}
            />
            <div>
              <strong>{name}</strong>
              {/* Generate username from name (lowercased, no spaces) */}
              <p>@{name.toLowerCase().replace(/\s/g, '')}</p>
            </div>
          </div>
        </div>

        {/* Right section with confirmation */}
        <div className={styles.right}>
          <p className={styles.admit}>Confirm ticket</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
