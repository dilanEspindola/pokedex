import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

import '../styles/imgBackgroundRegisterLogin.css';

const Login = () => {
  const navigate = useNavigate();
  const { loginWithEmailAndPassword, loginGoogle, loginFacebook } = useAuth();
  const { handleChange, dataForm } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await loginWithEmailAndPassword(dataForm.email, dataForm.password)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome!',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Contraseña incorrecta',
          });
          break;
        case 'auth/user-not-found':
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario/correo no existe',
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
        <h1 className='text-lg capitalize mb-2 text-white'>inicia sesión</h1>
        <input
          type='text'
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
            Iniciar Sesión
          </button>
          <Link to='/register' className='text-green-300'>
            No tienes cuenta?
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

export default Login;
