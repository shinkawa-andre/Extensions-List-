import "./Toggle.scss";

function Toggle({ active, setActive }) {
  return (
    <label className={`switch ${active ? "active" : ""}`}>
      <input
        type="checkbox"
        checked={active}
        onChange={() => setActive(!active)}
      />

      <span className="slider"></span>
    </label>
  );
}

export default Toggle;