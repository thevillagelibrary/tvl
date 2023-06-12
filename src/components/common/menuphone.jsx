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
    <section id='menu_phone'>
      <button id='close' >
        <Close  size={50} onClick={handleClick} />
      </button>
      <hr className='divider' />
      <nav><MenuPhoneLinks /></nav>;
    </section>
  );
}
