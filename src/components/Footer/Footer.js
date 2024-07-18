import React from 'react';

const footerStyle = {
  width: "100%",
  backgroundColor: "#f1f1f1",
  color: "black",
  textAlign: "center"
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "1rem" }}>
        © 2024
      </div>
    </footer>
  );
}

