import PropTypes from 'prop-types';
import IconDashboard from '../Icons/IconDashboard'; 
import ButtonModal from '../Catalogue/ButtonModal';
import { Rating } from 'react-simple-star-rating'

function CardCatalogue(props) {
    return(
        <section className="w-full max-w-[450px] max-h-[125px] bg-[--var-light] rounded-lg [box-shadow:rgba(0,_0,_0,_0.16)_0px_3px_6px,_rgba(0,_0,_0,_0.23)_0px_3px_6px] flex relative">
            <img className='rounded-tl-lg' src="./Image.png" alt="" width={130} height={125}/>
            <article className='flex flex-col'>
                <div className='flex-grow py-1 px-2'>
                    <h2 className='font-bold text-md'>{props.name}</h2>
                    <p className='text-sm'>{props.description}</p>
                </div>
                <div className='w-full flex justify-between px-2 py-2 items-center'>
                    <Rating size={32} readonly allowFraction initialValue={props.rating} />
                    <ButtonModal />
                </div>
                {props.deleteMode && 
                    <button className='absolute w-12 h-12 -mt-5 -mr-5 right-0 top-0 bg-[--var-danger-75] rounded-full flex justify-center items-center'>
                        <IconDashboard />
                    </button>
                }
            </article>
        </section>
    )
}

CardCatalogue.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    deleteMode: PropTypes.bool,
}

export default CardCatalogue;