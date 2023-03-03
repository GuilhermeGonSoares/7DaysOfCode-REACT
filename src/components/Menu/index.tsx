import style from './Menu.module.scss'
import logo from '../../assets/img/logo.png';
import { useEffect, useState } from 'react';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    useEffect(() => {
        function handleResize() {
          setIsDropdown(window.innerWidth < 781);
        }
        
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


    return (
        <header className={style.header}>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div>
                {isDropdown && <button onClick={() => setIsOpen(!isOpen)}>Menu</button>}
                <ul className={`${style.menu} ${isDropdown ? `${style.dropdown}` : ''}`}>
                    <li>Como fazer</li>
                    <li>/</li>
                    <li>Ofertas</li>
                    <li>/</li>
                    <li>Depoimentos</li>
                    <li>/</li>
                    <li>Videos</li>
                    <li>/</li>
                    <li>Meu carrinho</li>
                </ul>
            </div>
        </header>
    )
}