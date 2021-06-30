import "./Header.css";

export default function Header() {
  return (
    <span className="header" onClick={() => window.scroll(0, 0)}>
      Entertainment Hub{" "}
    </span>
  );
}
