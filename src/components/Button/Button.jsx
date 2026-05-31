import './Button.css';

/**
 * Button Component
 * Reusable button with different variants:
 * - "primary" : Solid purple button
 * - "secondary" : Light purple/outlined button
 * - "disabled" : Gray disabled button
 *
 * @param {string} children - Button text
 * @param {string} variant - Button style variant
 * @param {function} onClick - Click handler
 * @param {string} type - Button type (button, submit)
 * @param {string} id - Unique id
 */
function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  id,
}) {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      type={type}
      id={id}
    >
      {children}
    </button>
  );
}

export default Button;
