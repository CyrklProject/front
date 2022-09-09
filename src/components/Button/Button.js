/* eslint-disable react/prop-types */
import './button.css';

const STYLES = ['btn--primary--solid', 'btn--primary--outline', 'btn--primary--reverse'];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
