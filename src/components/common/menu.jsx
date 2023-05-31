import { Link } from 'react-router-dom';
import { MdClose as Close } from 'react-icons/md';
import { MenuLinks } from '@/components/common';

export default function Menu() {
  return (
    <>
      <button id='close'>
        <Link to='/'>
          <Close size={50} />
        </Link>
      </button>
      <MenuLinks />;
    </>
  );
}
