import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

import Content from 'app/components/layout/ContentWraper';
import Footer from 'app/components/includes/Footer';
import Header from 'app/components/includes/Header';
import Sidebar from 'app/components/includes/Sidebar';

import Intro from 'app/components/layout/Intro';
import { INavItem } from 'app/components/base/NavItem';
// import { INavItem } from 'app/components/base/NavItem';


const CVPage: React.FC = () => {
    const [currSelect, setCurrSelect] = useState<string>('1');

    let navItemList = [
        {
            id: '1',
            icon: <FaUser size={25} />,
            label: 'About',
        },
        {
            id: '2',
            icon: <FaUser size={25} />,
            label: 'Duy1',
        },
        {
            id: '3',
            icon: <FaUser size={25} />,
            label: 'Duy2',
        },
        {
            id: '4',
            icon: <FaUser size={25} />,
            label: 'Duy3',
        },
        {
            id: '5',
            icon: <FaUser size={25} />,
            label: 'Duy4',
        },
    ]

    const handleMenuClick = (currItem: INavItem) => {
        setCurrSelect(currItem.id);
    }

    return (
        <>
            <div className='container gutter-top'>
                <Header />
                <div className='row sticky-parent'>
                    <Sidebar
                        onMenuClick={handleMenuClick}
                        navItemList={navItemList}
                        activeId={currSelect}
                    />
                    <div className='col-12 col-md-12 col-lg-10'>
                        <Content>
                            <Intro title='About Me'>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </Intro>
                            <Intro title='Ahaha'>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </Intro>
                        </Content>
                        <Footer>© 2021 DuyDang</Footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CVPage;
