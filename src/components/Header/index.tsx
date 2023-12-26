import React, { useContext } from 'react';
import { Container } from './styles';
import ReactSwitch from 'react-switch';

import { ThemeContext } from 'styled-components';

import { shade } from 'polished';


interface HeaderProps {
    toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext);
    return (
        <Container>
            Hello DevSaLLein

            <ReactSwitch 
                onChange={toggleTheme}
                checked={theme?.title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={20}
                offColor=''
                onColor={theme ? shade(0.15, theme.colors.secundary) : ''}

            />
        </Container>
    );
}

export default Header;