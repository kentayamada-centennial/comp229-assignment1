import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  function search() {
    navigate("/");
  }
  return (
    <button type="button" onClick={search}>
      Go home
    </button>
  );
}
