import React, { useState } from 'react';
import { useAuth, useData } from '../../../context';
import {
  editAddressServices,
  postAddressServices,
} from '../../../services/Services';
import { ACTION_TYPE } from '../../../utils/actionType';
import './AddressModal.css';
import { v4 as uuid } from 'uuid';

export const AddressModal = ({ addressModal, setAddressModal }) => {
  const { token } = useAuth();
  const { state, dispatch } = useData();
  const [address, setAddress] = useState({
    _id: uuid(),
    houseNo: '',
    area: '',
    city: '',
    pincode: '',
  });

  const adressHandler = async () => {
    try {
      const response = await postAddressServices({
        address: address,
        token,
      });
      if (response.status === 201) {
        dispatch({
          type: ACTION_TYPE.ADDRESS,
          payload: { address: response.data.address },
        });
        setAddressModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='card cards card--text adress__card'>
      <label>Flat, House no., Building</label>
      <input
        onChange={(e) => setAddress({ ...address, houseNo: e.target.value })}
        value={address.houseNo}
        className='input-txt'
        type='text'
        autoComplete='off'
      />
      <label>Area, Colony, Street</label>
      <input
        onChange={(e) => setAddress({ ...address, area: e.target.value })}
        value={address.area}
        className='input-txt'
        type='text'
        autoComplete='off'
      />
      <label>Town/City</label>
      <input
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
        value={address.city}
        className='input-txt'
        type='text'
        autoComplete='off'
      />
      <label>Pincode</label>
      <input
        onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
        value={address.pincode}
        className='input-txt'
        type='number'
        autoComplete='off'
      />
      <div className='action-btn adress__btns'>
        <button onClick={adressHandler} className='btn btn--save'>
          Save
        </button>
        <button
          onClick={() => setAddressModal(false)}
          className='btn btn--cancel'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
