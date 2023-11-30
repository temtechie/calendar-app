import './button.css';

const Button = ({ text }: any) => {
  return (
    <div>
      <button
        // onClick={() => openModal('create', {})}
        style={{ cursor: 'pointer' }}
        className='app-btn'
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
