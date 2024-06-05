import PropTypes from 'prop-types';

function IconDelete(props) {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.69165 26.3333C3.92498 26.3333 3.28498 26.0767 2.77165 25.5633C2.25831 25.05 2.00109 24.4094 1.99998 23.6417V2.99999H0.333313V1.33332H6.99998V0.0499878H17V1.33332H23.6666V2.99999H22V23.6417C22 24.4083 21.7433 25.0483 21.23 25.5617C20.7166 26.075 20.0761 26.3322 19.3083 26.3333H4.69165ZM8.34665 21.3333H10.0133V6.33332H8.34665V21.3333ZM13.9866 21.3333H15.6533V6.33332H13.9866V21.3333Z"
        fill={props.fill ? props.fill : 'white'}
      />
    </svg>
  );
}

IconDelete.propTypes = {
    fill: PropTypes.string,
};

export default IconDelete;
