import PropTypes from 'prop-types';
import IconDashboard from '../Icons/IconDashboard'; 
// import ButtonModal from '../ButtonModal';

function CardCatalogue(props) {
    return(
        <section className="w-full max-w-[450px] max-h-[125px] bg-[--var-light] rounded-lg [box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] flex relative">
            <img className='rounded-tl-lg' src="./Image.png" alt="" width={130} height={125}/>
            <article className='flex flex-col'>
                <div className='flex-grow py-1 px-2'>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <div className='w-full bg-[--var-dark-50] flex justify-between px-2 py-2 items-center'>
                    <p>{props.rating}</p>
                    {/* <ButtonModal /> */}
                    <button className='bg-[--var-dark-shades] text-white px-3 py-[1px] rounded'>Ver más</button>
                </div>
                <div>
                    <button className='absolute w-12 h-12 -mt-5 -mr-5 right-0 top-0 bg-[--var-danger-75] rounded-full flex justify-center items-center'><IconDashboard /></button>
                </div>
            </article>
        </section>
    )
}

CardCatalogue.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}

export default CardCatalogue;