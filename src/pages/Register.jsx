import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

import '../styles/imgBackgroundRegisterLogin.css';

const Register = () => {
  const { createUser, loginGoogle, loginFacebook } = useAuth();
  const navigate = useNavigate();

  const { handleChange, dataForm } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (dataForm.email === '' || dataForm.password === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes llenar todos los campos',
        });
      }

      await createUser(dataForm.email, dataForm.password).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El usuario se ha creado',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/weak-password':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña debe tener minimo 6 caracteres',
          });
          break;
        case 'auth/email-already-in-use':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El correo ya existe',
          });
          break;
        default:
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'ocurrio un error inesperado',
          });
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await loginGoogle();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await loginFacebook();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center img-background-register-login'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-3 w-3/12 py-6 px-3 bg-gradient-to-r from-green-800
         to-lime-600 shadow-2xl rounded-md md:w-6/12'
      >
        <h1 className='text-lg capitalize mb-2 text-white'>registrate</h1>
        <input
          type='email'
          name='email'
          placeholder='correo'
          onChange={handleChange}
          className='p-2 placeholder:text-green-300 rounded-md'
        />
        <input
          type='password'
          name='password'
          placeholder='constraseña'
          onChange={handleChange}
          className='p-2 placeholder:text-green-300 rounded-md'
        />
        <div className='flex justify-between items-center sm:flex-col sm:gap-2'>
          <button
            className='mt-2 p-2 bg-gradient-to-l from-lime-500 to-lime-600 w-6/12
           hover:bg-lime-700'
          >
            Registrarme
          </button>
          <Link to='/login' className='text-green-300'>
            Ya tienes cuenta?
          </Link>
        </div>
      </form>
      <div className='flex gap-5 mt-5'>
        <button className='bg-white p-2' onClick={signInWithGoogle}>
          Login con Google
        </button>
        <button className='bg-blue-500 p-2' onClick={signInWithFacebook}>
          Login con Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
