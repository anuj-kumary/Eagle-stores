import { useState } from 'react';
import { useAuth, useData } from '../../context';
import {
  deleteAddressServices,
  editAddressServices,
} from '../../services/Services';
import { ACTION_TYPE } from '../../utils/actionType';
import '../Checkout/Checkout.css';
import { Checkoutprice } from './CheckoutPrice';
import { AddressModal } from './components/AddressModal';

export const Checkout = () => {
  const [addressModal, setAddressModal] = useState(false);
  const { user, token } = useAuth();
  const { state, dispatch } = useData();
  const [checkBoxValidation, setCheckBoxValidation] = useState();
  console.log(checkBoxValidation);
  const deleteAddressHandler = async (id) => {
    try {
      const response = await deleteAddressServices(id, token);
      if (response.status === 200) {
        dispatch({
          type: ACTION_TYPE.DELETE_ADDRESS,
          payload: { address: response.data.address },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className='text__center content__heading'>Checkout</h1>
      <div className='checkout__container'>
        <div className='checkout__box'>
          {state.address.map((add) => (
            <div key={add._id} className='card card--text'>
              <label>
                <input
                  onChange={(e) => setCheckBoxValidation(add._id)}
                  type='radio'
                  name='radio'
                />
                <p className='address__name'>{add.houseNo}</p>
              </label>
              <p className='card__desc'>{add.area}</p>
              <p className='card__desc'>
                {add.city} - {add.pincode}
              </p>
              <div className='action-btn adress__btn'>
                <button
                  onClick={() => deleteAddressHandler(add._id)}
                  className='btn btn--cancel'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div>
            <button onClick={() => setAddressModal(true)} className='btn'>
              Add New Address
            </button>
          </div>
          <div>
            {addressModal ? (
              <AddressModal
                addressModal={addressModal}
                setAddressModal={setAddressModal}
              />
            ) : null}
          </div>
        </div>
        <Checkoutprice checkBoxValidation={checkBoxValidation} />
      </div>
    </>
  );
};
