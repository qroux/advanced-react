import './Error.scss';

const Error = ({ message }) => {
  return (
    <div className='error__container'>
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
