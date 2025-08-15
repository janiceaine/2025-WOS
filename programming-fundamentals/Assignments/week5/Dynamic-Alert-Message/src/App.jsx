// Collaborate with Janis and Tamara

import Alert from "./components/Alert";

function App() {
  return (
    <div className="containier">
      <Alert type="success" message="✅ File uploaded successfully!" />
      <Alert type="warning" message="⚠️ Your subscription is about to expire."/>
      <Alert type="error" message="❌ Something went wrong. Try again." />
    </div>
  );
}

export default App;
