export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ textAlign: "center", padding: "1rem", background: "#f1f1f1" }}>
      <p style={{ fontSize: "0.9rem", color: "#333" }}>
        Pedra Viva <span style={{ fontSize: 12 }}>©</span> {currentYear} - Todos os direitos reservados
      </p>
    </footer>
  );
};
