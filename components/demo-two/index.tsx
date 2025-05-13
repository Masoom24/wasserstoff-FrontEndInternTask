"use client"; // Required to use client-side hooks like useSearchParams

import TicketCard from "@/components/tiketcard/TicketCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Import Suspense from React

// Child component to handle params and rendering
const TicketContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  return (
    <TicketCard
      name={name || ""}
      email={email || ""}
      eventName="Coding conf 2025"
    />
  );
};

// Parent component with Suspense wrapper
const TicketConfirmationPage = () => {
  return (
    <div>
      {/* Suspense required for useSearchParams in App Router */}
      <Suspense fallback={<p>Loading ticket details...</p>}>
        <TicketContent />
      </Suspense>
    </div>
  );
};

export default TicketConfirmationPage;
