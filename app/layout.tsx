'use client'

// app/layout.tsx
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';  // Import Redux store
import "./globals.css";
import Header from './components/Header/page'; // Your header component
import Footer from './components/Footer/page'; // Your footer component

 function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}  {/* The children (products page) should be wrapped in Provider */}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
export default RootLayout;