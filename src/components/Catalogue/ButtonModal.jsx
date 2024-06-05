import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getComments, getRatingDestination } from "../../services/getComments";
import { addComment } from "../../services/addComment";

function ButtonModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState({});
  const [rating, setRating] = useState(0.0);
  const [valid, setValid] = useState("");
  const [errors, setErrors] = useState("");
  let auth = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    if (valid) {
      const timer = setTimeout(() => {
        setValid(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [valid]);

  useEffect(() => {
    if (showModal) {
      const fetchComments = async () => {
        try {
          const responseComments = await getComments(props.data.id);
          const responseRating = await getRatingDestination(props.data.id);

          setComments(responseComments);

          const parsedRating = parseFloat(responseRating);
          if (!isNaN(parsedRating)) {
            setRating(parsedRating.toFixed(1));
          } else {
            setRating(0);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchComments();
    }
  }, [showModal, props.data.id, comments.length]);

  const handleSubmitComment = async () => {
    if (!userComment.rating || !userComment.comment) {
      setErrors("Por favor, complete todos los campos.");
      return;
    }

    const comment = {
      user_id: auth.data.id,
      destination_id: props.data.id,
      text_comment: userComment.comment,
      rating: userComment.rating,
      name_user: auth.data.name,
      comment_date: new Date().toISOString(),
    };

    try {
      const response = await addComment(comment);
      if (response) {
        setComments([...comments, response]);
        setUserComment({});
        setValid("Comentario enviado correctamente.");
      }
    } catch (error) {
      setErrors("Ha ocurrido un error al enviar el comentario.");
    }
  };

  return (
    <>
      <button
        className="bg-[--var-dark-shades] text-white active:bg-[--var-hover-dark-shades] font-bold uppercase text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver más
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[rgba(0,0,0,0.5)]">
            <div className="relative w-auto my-6 pt-8 mx-auto h-auto">
              {/*content*/}
              <div className="max-w-4xl w-[900px] max-h-screen h-auto overflow-hidden overflow-y-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-[--var-white] outline-none focus:outline-none">
                {/*header*/}
                <div
                  className="flex items-start justify-between border-b border-solid border-blueGray-200 rounded-t text-white bg-no-repeat bg-fixed bg-cover bg-center"
                  style={{ backgroundImage: `url(${props.data.image})` }}
                >
                  <h3 className="text-3xl font-semibold bg-[--var-dark-75] mt-5 px-5 rounded-r-xl py-1">
                    {props.data.city + ", " + props.data.country + "."}
                  </h3>
                  <article className="w-full max-w-[50%] h-full bg-[--var-dark-75] p-5 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">{props.data.name}</h2>
                    <div className="flex gap-3">
                      <span className="text-sm">{props.data.days} Dia(s)</span>
                      <span className="text-sm">
                        {props.data.nights} Noche(s)
                      </span>
                    </div>
                    <p className="text-sm">
                      Alojamiento/Hotel: {props.data.hotel}
                    </p>
                    <p className="text-sm">
                      Tickets de vuelos: {props.data.tickets}
                    </p>
                    <p className="text-sm">{props.data.description}</p>
                    <p className="text-sm">
                      + Informacion: {props.data.aditional_information}
                    </p>
                    <p className="text-sm">
                      desde <br />{" "}
                      <span className="text-lg">
                        $ {props.data.price} COP/Persona
                      </span>
                    </p>
                  </article>
                </div>
                {/*body*/}
                <article className="relative flex flex-auto justify-between p-5 gap-5">
                  <div className="flex flex-col gap-3 w-1/3">
                    <h2 className="text-xl font-semibold text-center">
                      Resumen de opiniones
                    </h2>
                    <div className="flex flex-col w-full justify-center items-center">
                      <p className="text-[64px] font-bold">
                        {rating ? rating : 0.0}
                      </p>
                      <Rating
                        size={32}
                        readonly
                        allowFraction
                        initialValue={rating ? rating : 0.0}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      "flex w-2/3 flex-col gap-3 max-h-[160px] overflow-y-auto px-2 h-[160px]" +
                      (comments.length === 0
                        ? " justify-center items-center"
                        : "")
                    }
                  >
                    {comments.length > 0 ? (
                      comments.map((comment) => {
                        const date = new Date(comment.comment_date);
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();

                        return (
                          <Comment
                            key={comment.id}
                            username={comment.name_user}
                            date={day + "/" + month + "/" + year}
                            rating={comment.rating}
                            comment={comment.text_comment}
                          />
                        );
                      })
                    ) : (
                      <p className="text-center text-md">
                        No hay comentarios para mostrar.
                      </p>
                    )}
                  </div>
                </article>
                <article className="flex justify-end items-center gap-5 py-4 px-2">
                  <Rating
                    initialValue={userComment.rating ? userComment.rating : 0}
                    name="rating"
                    size={32}
                    onClick={(rate) =>
                      setUserComment({ ...userComment, rating: rate })
                    }
                  />
                  <div className="flex justify-center items-center">
                    <input
                      value={userComment.comment ? userComment.comment : ""}
                      onChange={(e) =>
                        setUserComment({
                          ...userComment,
                          comment: e.target.value,
                        })
                      }
                      name="comment"
                      type="text"
                      className="focus:outline-[--var-dark-shades] px-2 py-1 border w-[325px]"
                      autoComplete="off"
                    />
                    <button
                      onClick={handleSubmitComment}
                      className="bg-[--var-dark-shades] text-white active:bg-[--var-hover-dark-shades] font-bold uppercase text-sm px-2 py-2 rounded-r-md shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    >
                      Enviar
                    </button>
                  </div>
                </article>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  {auth?.data.role === "ADMIN" ? (
                    <Link to={`/catalogue/modify/${props.data.id}`}>
                      <button
                        className="bg-[--var-dark-shades] text-white active:bg-[--var-hover-dark-shades] font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                      >
                        Editar
                      </button>
                    </Link>
                  ) : null}
                </div>
              </div>
              <div className="fixed bottom-0 right-0 mb-5 mr-5">
                {errors && (
                  <p className="font-bold right-0 bottom-0 bg-red-500 px-4 py-2 mb-5 mr-5 text-white rounded-lg">
                    {errors}
                  </p>
                )}
                {valid && (
                  <p className="font-bold right-0 bottom-0 bg-green-500 px-4 py-2 mb-5 mr-5 text-white rounded-lg">
                    {valid}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

ButtonModal.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ButtonModal;
