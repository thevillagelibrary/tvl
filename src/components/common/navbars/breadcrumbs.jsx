import { Link, useLocation } from 'react-router-dom';
import { pages } from '@/constants';

export default function BreadCrumbs() {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/');
  const path = `/${pathParts[1]}`;
  const page = pages.find((page) => page.path === pathParts[1]);
  const subPages = page.subPages;
  let subPage;
  if (pathParts.length > 2) {
    subPage = subPages.find((subPage) => subPage.path === pathParts[2]);
  }

  return (
    <div>
      {pathParts.length > 2 && (
        <section id='breadcrumbs'>
            <Link to={path}>{page.name}</Link>{subPage.name}
        </section>
      )}
    </div>
  );
}
