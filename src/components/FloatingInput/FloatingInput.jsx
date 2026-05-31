import './FloatingInput.css';

/**
 * FloatingInput Component
 * A text input with a floating label that sits above the border,
 * matching the design's "outlined" input style.
 *
 * @param {string} label - The label text
 * @param {string} type - Input type (text, email, password, tel)
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Current value
 * @param {function} onChange - Change handler
 * @param {boolean} required - Whether field is required
 * @param {string} id - Unique id for the input
 */
function FloatingInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  id,
}) {
  return (
    <div className="floating-input" id={`field-${id}`}>
      <label className="floating-input__label" htmlFor={id}>
        {label}
        {required && <span className="floating-input__required">*</span>}
      </label>
      <input
        className="floating-input__input"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete="off"
      />
    </div>
  );
}

export default FloatingInput;
