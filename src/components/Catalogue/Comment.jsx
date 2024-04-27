import { PropTypes } from 'prop-types';
import { Rating } from 'react-simple-star-rating';

function Comment(props) {
    return(
        <section className="flex gap-3 p-2">
            <article className='flex flex-col text-sm w-1/3'>
                <p>{props.username}</p> 
                <p className='text-gray-400'>{props.date}</p>
                <Rating className='-m-[2px]' size={16} readonly allowFraction initialValue={props.rating} />
            </article>
            <p>{props.comment}</p>
        </section>
    )
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
}

export default Comment;