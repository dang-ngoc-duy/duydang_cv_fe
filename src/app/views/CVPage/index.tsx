import { useEffect, useState } from 'react';
import { FaFileAlt, FaImages, FaUser } from 'react-icons/fa';
import { FiCodesandbox } from 'react-icons/fi';
import { Route, Routes, useNavigate } from 'react-router';

import { INavItem } from 'app/components/base/NavItem';
import ContentWraper from 'app/components/layout/ContentWraper';
import Footer from 'app/components/includes/Footer';
import Header from 'app/components/includes/Header';
import Sidebar from 'app/components/includes/Sidebar';

import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Photo from './Photo';

const CVPage: React.FC = () => {
  const [currSelect, setCurrSelect] = useState<string>('1');

  const navigate = useNavigate();

  let navItemList = [
    {
      id: '1',
      icon: <FaUser size={32} />,
      label: 'about',
    },
    {
      id: '2',
      icon: <FaFileAlt size={32} />,
      label: 'resume',
    },
    {
      id: '3',
      icon: <FiCodesandbox size={32} />,
      label: 'projects',
    },
    {
      id: '4',
      icon: <FaImages size={32} />,
      label: 'photo',
    },
    // {
    //     id: '5',
    //     icon: <FaUser size={32} />,
    //     label: 'contract',
    // },
  ];

  const handleMenuClick = (currItem: INavItem) => {
    setCurrSelect(currItem.id);
    navigate('/' + currItem.label);
  };

  useEffect(() => {
    navigate('/about');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container gutter-top">
        <Header />
        <div className="row sticky-parent">
          <Sidebar
            onMenuClick={handleMenuClick}
            navItemList={navItemList}
            activeId={currSelect}
          />
          <div className="col-12 col-md-12 col-lg-10">
            <ContentWraper>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/photo" element={<Photo />} />
              </Routes>
            </ContentWraper>
            <Footer>© 2021 Justin Dang</Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVPage;
