import axios from './axios'
import { searchClient } from './searchClient';
import { searchEmployee } from './searchEmployee';

const ADD_RESERVATION_URL = '/api/v1/reservation/addReservation'
const ADD_RESERVATION_DESTINATION_URL = '/api/v1/reservation_destination/addReservationDestination'

export const addReservation = async (data, selectedDestinations, setErrors, setValid) => {

  let auth = JSON.parse(localStorage.getItem('user') || 'null');
    
  const config = {
      headers: {
          Authorization: `Bearer ${auth?.data.token}`        
      }
  };

  try {
    const { date } = data

    const responseCustomer = await searchClient(data.card_number, setErrors, setValid)
    const responseSeller = await searchEmployee(auth.data.id, setErrors, setValid)

    const response = await axios.post(
      ADD_RESERVATION_URL, 
      {
        seller: {
            id: responseSeller.id,
            name: responseSeller.name,
            lastname: responseSeller.lastname,
            role: responseSeller.role,
            email: responseSeller.email,
            phone_numbber: responseSeller.phone_number,
            address: responseSeller.address,
            card_number: responseSeller.card_number,
            username: responseSeller.username,
            password: responseSeller.password,
        },
        customer: {
            id: responseCustomer.id,
            name: responseCustomer.name,
            lastname: responseCustomer.lastname,
            role: responseCustomer.role,
            email: responseCustomer.email,
            phone_numbber: responseCustomer.phone_number,
            address: responseCustomer.address,
            card_number: responseCustomer.card_number,
            username: responseCustomer.username,
            password: responseCustomer.password,
        },
        reservationDate: new Date().toISOString(),
        status: 'confirmed',
        total: selectedDestinations.reduce((acc, destination) => acc + destination.price, 0)
      },
      config
    )
    if (response.status === 200) {
      try {
        for (let i = 0; i < selectedDestinations.length; i++) {
          const responseDestination = await axios.post(
            ADD_RESERVATION_DESTINATION_URL,
            {
                reservation_id: response.data.id, 
                destination_id: selectedDestinations[i].id, 
                total: selectedDestinations[i].price,
                reservation_date: selectedDestinations[i].reservation_date,
            },
            config
          )
          if (responseDestination.status === 200) {
            setValid("La reservación del destino ha sido registrada exitosamente")
          }
        }
        return true;
      } catch (error) {
        console.log(error)
        setErrors('Error al agregar los destinos')
      }
    }
  } catch (error) { 
    if (!error.response) {
      setErrors('Error de conexión')
    } else if (error.response.status === 401) {
      setErrors('La reservacion ya existe')
    } else if (error.response.status === 403) {
      setErrors('No tienes permisos para ejecutar esta acción')
    } else if (error.response.status === 500) {
      setErrors('Error en el servidor')
    } else {
        console.log(error)
      setErrors('El registro ha fallado')
    }
  }

}