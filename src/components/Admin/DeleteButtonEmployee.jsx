import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IconDelete from '../Icons/Delete'
import PropTypes from 'prop-types'
import { deleteEmployee } from '../../services/deleteEmployee'

function DeleteButtonEmployee({ id }) {

  const showSwal = () => {
    withReactContent(Swal).fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción!",
        icon: "warning",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminarlo!",
        preConfirm: () => {
            deleteEmployee(id)
                .then(response => {
                    if (response === 'Usuario eliminado con éxito') {
                        Swal.fire(
                            "Eliminado!",
                            "El empleado ha sido eliminado.",
                            "success"
                        );
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);
                    } else {
                        Swal.showValidationMessage(
                            `Ha surgido un error: ${response}`
                        );
                    }
                })
                .catch(error => {
                    console.error(error);
                    Swal.showValidationMessage(
                        "Ha surgido un error al eliminar el empleado."
                    );
                });
        }
    })
  }

  return (
    <>
      <button className='bg-red-500 text-white p-2 rounded' onClick={showSwal}><IconDelete /></button>
    </>
  )
}

DeleteButtonEmployee.propTypes = { 
    id: PropTypes.number.isRequired,
    deleteFunction: PropTypes.func
}

export default DeleteButtonEmployee;
