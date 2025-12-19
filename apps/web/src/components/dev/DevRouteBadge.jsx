// apps\web\src\components\dev\DevRouteBadge.jsx
import { useLocation } from "react-router-dom";

export default function DevRouteBadge() {
  const { pathname } = useLocation();
  return (
    <div style={{
      position: "fixed",
      top: 8,
      left: 8,
      zIndex: 99999,
      background: "#fff",
      padding: "6px 10px",
      borderRadius: 6,
      boxShadow: "0 2px 10px rgba(0,0,0,.15)",
      fontSize: 12
    }}>
      Route: <strong>{pathname}</strong>
    </div>
  );
}
