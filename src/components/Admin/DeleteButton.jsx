import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IconDashboard from '../Icons/IconDashboard'
import PropTypes from 'prop-types'
import { deleteClient } from '../../services/deleteClient'

function DeleteButton({ id }) {

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
            const response = deleteClient(id) 
            if (response.status === 200) {
                Swal.fire(
                    "Eliminado!",
                    "El cliente ha sido eliminado.",
                    "success"
                )
            } else {
                Swal.showValidationMessage(
                    `Ha surgido un error: ${response}`
                )
            }
        }
    })
  }

  return (
    <>
      <button className='bg-red-500 text-white p-2 rounded' onClick={showSwal}><IconDashboard /></button>
    </>
  )
}

DeleteButton.propTypes = { 
    id: PropTypes.number.isRequired 
}

export default DeleteButton;
