import "./App.css";
import styles from "./Card.module.css";

function App() {
  const inlineStyle = {
    padding: "16px",
    backgroundColor: "#d9ead3",
    border: "1px solid #333",
    borderRadius: "6px",
    marginBottom: "12px"
  };

  return (
    <div className="page">
      <h2>Practical 9: Three CSS Approaches</h2>

      <div style={inlineStyle}>1. This box uses Inline CSS</div>

      <div className="stylesheetBox">2. This box uses External Stylesheet CSS</div>

      <div className={styles.moduleBox}>3. This box uses CSS Module</div>
    </div>
  );
}

export default App;
