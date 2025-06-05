const BirthdayCards = ({ name }) => {
  const cardStyle = {
    width: "200px",
    height: "250px",
    color: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out", // Smooth transition for scaling
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {/* Card 1 */}
      <div
        style={{
          ...cardStyle,
          background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Scale up on hover
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Scale back to normal
      >
        <h3>Happy Birthday 🎉</h3>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>Dear {name},</p>
        <p>Wishing you a day filled with love, laughter, and joy!</p>
      </div>

      {/* Card 2 */}
      <div
        style={{
          ...cardStyle,
          background: "linear-gradient(135deg, #ff9a8b, #fad0c4)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h3>Celebrate 🎂</h3>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>Hey {name}!</p>
        <p>Hope your day is as awesome as you are!</p>
      </div>

      {/* Card 3 */}
      <div
        style={{
          ...cardStyle,
          background: "linear-gradient(135deg, #00d2ff, #928dab)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h3>Make a Wish 🌟</h3>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>Dear {name},</p>
        <p>May all your dreams come true today and always!</p>
      </div>
    </div>
  );
};

export default BirthdayCards;
