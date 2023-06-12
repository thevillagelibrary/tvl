import { useNavigate } from 'react-router-dom';
import { MdArrowBack as Close } from 'react-icons/md';
import { MenuPhoneLinks } from '@/components/common';

export default function MenuPhone() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate(-1);
  }
  return (
    <>
      <button id='close' >
        <Close  size={50} onClick={handleClick} />
      </button>
      <hr className='hr_divider' />
      <nav id='menu_phone'><MenuPhoneLinks /></nav>;
    </>
  );
}
