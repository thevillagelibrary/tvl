import { useNavigate } from 'react-router-dom';
import { MdArrowBack as Close } from 'react-icons/md';
import { MenuLinks } from '@/components/common';

export default function Menu() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate(-1);
  }
  return (
    <>
      <button id='btn_close'>
        <Close size={50} onClick={handleClick} />
      </button>
      <hr className='hr_divider' />
      <MenuLinks />;
    </>
  );
}
