import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#feabce] to-[#aaa4fd] opacity-70 py-4">
      <div className="container mx-auto text-center text-black">
        <p>&copy; {new Date().getFullYear()}.inc All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;


