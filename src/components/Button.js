import PropsTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
//porps validation
Button.propTypes = {
  color: PropsTypes.string,
  text: PropsTypes.string,
  onClick: PropsTypes.func,
};

export default Button;
