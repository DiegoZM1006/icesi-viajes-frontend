import { PropTypes } from "prop-types";
import { Rating } from "react-simple-star-rating";

function Comment(props) {
  return (
    <section className="flex p-2 w-full border-b-2 relative">
      <article className="flex flex-col text-sm w-1/3">
        <p>{props.username}</p>
        <p className="text-gray-400">{props.date}</p>
        <Rating
          className="-m-[2px]"
          size={18}
          readonly
          allowFraction
          initialValue={props.rating}
        />
      </article>
      <p className="w-full">{props.comment}</p>
      {/* <div className="absolute right-0 bottom-0 flex gap-1 mb-1">
        <button className="w-5 h-5 rounded-full bg-red-500 text-white">D</button>
        <button className="w-5 h-5 rounded-full bg-blue-500 text-white">D</button>
      </div> */}
    </section>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Comment;
