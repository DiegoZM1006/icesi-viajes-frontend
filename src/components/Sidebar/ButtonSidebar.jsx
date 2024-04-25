import PropTypes from 'prop-types';

function ButtonSidebar(props) {

    const classesBtn = (props.active) ? 'w-full flex flex-row gap-3 items-center bg-[--var-dark-shades] hover:bg-[--var-hover-dark-shades] p-2 rounded-sm' : 'w-full flex flex-row gap-3 items-center hover:bg-[--var-dark-shades] p-2 rounded-sm';

    return (
        <button className={classesBtn}>
            {props.image}
            <p>{props.description}</p>
        </button>
    )
}

ButtonSidebar.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  active: PropTypes.bool.isRequired
};

export default ButtonSidebar;