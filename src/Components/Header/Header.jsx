import './Header.css';
import { useState, useEffect } from 'react';

// components
import Title from '../Title/Title';
import Span from '../Span/Span';
import HeaderNav from './HeaderNav/HeaderNav'

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible(scrollPosition > currentScrollPos || currentScrollPos < 10);
        setScrollPosition(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <header id='main-header' className={isVisible ? 'visible' : 'hidden'}>
            <div className="logo-container">
                <h2>
                    <Span content="&lt;/&gt;" /> andreas.yuji
                </h2>
            </div>
            <HeaderNav/>
        </header>
    );
}
export default Header;
