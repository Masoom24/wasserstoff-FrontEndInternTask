Ticket Confirmation App

This is a simple Ticket Confirmation web application built with Next.js and TypeScript that allows users to view ticket details after registration.

Features

- Self-contained React components
- URL parameter-based ticket rendering
- No external UI libraries – built from scratch
- DRY (Don't Repeat Yourself) principle followed
- CSS classes used for all styling (no inline styles)
- Each component under 200 lines

Components Used

- `TicketCard`: Displays the ticket with user name, email, and event name.
- `TicketConfirmationPage`: Uses `useSearchParams` to extract query params from the URL and renders the `TicketCard` component.



