Skateboard Customizer Web Application

Overview

The Skateboard Customizer is a web application that allows users to build and customize their own skateboards. Users can select various parts such as wheels, decks, trucks, and bolts. The app provides a preview of the skateboard based on the selected components and includes a streamlined workflow for adding items to the cart.

Features

Build Your Board: Users can customize skateboards by selecting different components.

Live Preview: The app provides a visual representation of the selected skateboard parts.

Add to Cart: Users can add their customized skateboard to the cart.

Context-Driven State Management: Cart and selected components are managed using React Context for scalability and maintainability.

Future Scalability

The project has been designed with scalability in mind. Potential future features include:

Checkout Functionality: Adding a dedicated checkout page for processing orders.

Cart Management: Implementing cart item updates, such as quantity adjustments and item removal.

Payment Integration: Integrating payment gateways like Stripe or PayPal.

User Authentication: Enabling user login and order history.

Admin Dashboard: Allowing administrators to manage products and view customer orders.

Project Structure

src/
├── app/
│ ├── build/
│ │ ├── components/
│ │ │ ├── AddToCartButton.tsx
│ │ │ └── CartItem.tsx
│ │ ├── context/
│ │ │ └── CartContext.tsx
│ │ ├── checkout/
│ │ │ └── page.tsx
│ │ └── page.tsx
│ └── layout.tsx

Installation

Clone the repository

git clone <repository-url>

Navigate to the project directory

cd skateboard-web

Install dependencies

npm install

Run the development server

npm run dev

Open the app in your browser

http://localhost:3000

Usage

Navigate to the "Build Your Board" page.

Select different skateboard components.

Add the customized board to your cart using the "Add to Cart" button.

(Future) Proceed to checkout for payment.

Tech Stack

Frontend: React, Next.js, Tailwind CSS

State Management: React Context

Backend (Optional): Prismic for content management

Styling: Tailwind CSS

Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue for any improvements or suggestions.
