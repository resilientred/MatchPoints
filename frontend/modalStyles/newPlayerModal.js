export default {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  content: {
    position: "absolute",
    margin: "0 auto",
    width: "400px",
    height: "400px",
    transform: "translateY(25%)",
    opacity: "0.9",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
