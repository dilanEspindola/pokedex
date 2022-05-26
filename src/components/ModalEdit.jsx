import Modal from 'react-modal';
import { FormEdit } from './FormEdit';

export const ModalEdit = ({ showModal, setStateModal, pokemon }) => {
  const closeModal = () => {
    setStateModal(false);
  };

  Modal.setAppElement('#root');

  return (
    <div>
      <Modal className='h-screen' isOpen={showModal}>
        <div className='border-2 w-6/12 mx-auto p-5 mt-10'>
          <div className='flex justify-between'>
            <h1 className='uppercase text-lg'>editar pokemon</h1>
            <svg
              className='w-6 h-6 cursor-pointer'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              onClick={closeModal}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </div>
          <FormEdit pokemon={pokemon} setStateModal={setStateModal} />
        </div>
      </Modal>
    </div>
  );
};
