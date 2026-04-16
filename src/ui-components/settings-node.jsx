export default function SettingsNode({
  label,
  input_type = "checkbox",
  description,
  checked,
  onChange,
  id,
  value,
  min,
  max,
  step,
}) {
  return (
    <>
      <div className="flex items-center gap-4 mt-5">
        <label className="flex items-center gap-2" htmlFor={id}>
          <span>{label}</span>
          {input_type === "range" ? (
            <input
              id={id}
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={onChange}
              className="range"
            />
          ) : (
            <input
              id={id}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="checkbox"
            />
          )}
        </label>
      </div>
      <p className="text-sm opacity-70 mt-2">{description}</p>
    </>
  );
}
