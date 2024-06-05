import IconDashboard from '../Icons/IconDashboard';
import PropTypes from 'prop-types';

function CardDashboard(props) {
    return(
        <section className={'w-full flex flex-col justify-between min-h-[180px] py-5 px-3 rounded-[12px] border-[2px] border-[rgba(0,0,0,0.10)] scale-95 hover:scale-100 ' + props.classBtn}>
            <section className='flex justify-between'>
                <IconDashboard />
                <div className='flex flex-col items-end'>
                    <p className='font-semibold text-5xl'>{props.number}</p>
                    {props.secondNumber && <p className='text-sm'>{props.secondNumber}</p>}
                </div>
            </section>
            <h3 className='font- font-medium'>{props.description}</h3>
        </section>
    )
}

CardDashboard.propTypes = {
    classBtn: PropTypes.string,
    description: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    secondNumber: PropTypes.string,
};


export default CardDashboard;