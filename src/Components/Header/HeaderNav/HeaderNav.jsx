import React, { useState, useEffect } from 'react';
import './HeaderNav.css';

// components
import List from '../../List/List';
import ListItem from '../../ListItem/ListItem';
import ButtonLink from '../../ButtonLink/ButtonLink';

// icons
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // change menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // close the menu if you clicked around
    const handleClickOutside = (event) => {
        if (!event.target.closest('#mobile-header-nav') && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    // close the menu when you click on a button
    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    // detect clicks 
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Desktop/Tablet Navigation */}
            <nav id='header-nav'>
                <List 
                    type='unordened' 
                    direction='horizontal'
                    style='hashtag'
                >
                    <ListItem content={
                        <ButtonLink 
                            type='secondary'
                            content="# Skills"
                            link='#skills'
                        />
                    } />
                    <ListItem content={
                        <ButtonLink
                            type='secondary'
                            content='# About'
                            link='#about'
                        />
                    }/>
                    <ListItem content={
                        <ButtonLink
                            type='primary'
                            content='# Projects'
                            link='#projects'
                        />
                    } />
                    <ListItem content={
                        <ButtonLink
                            type='primary'
                            content='# Hire-Me!'
                            link='#hire-me'
                        />
                    }/>
                </List>
            </nav>

            {/* Mobile Navigation */}
            <nav id='mobile-header-nav'>
                <div id='hamburguer-button' onClick={toggleMenu}>
                    <RxHamburgerMenu/>
                </div>
                <div id='mobile-nav-menu' className={isMenuOpen ? 'show' : 'hide'}>
                    <List 
                        type='unordened' 
                        direction='horizontal'
                        style='hashtag'
                    >
                        <ListItem content={
                            <ButtonLink 
                                type='secondary'
                                content="# Skills"
                                link='#skills'
                                onClick={handleMenuItemClick}
                            />
                        } />
                        <ListItem content={
                            <ButtonLink
                                type='secondary'
                                content='# About'
                                link='#about'
                                onClick={handleMenuItemClick}
                            />
                        }/>
                        <ListItem content={
                            <ButtonLink
                                type='primary'
                                content='# Projects'
                                link='#projects'
                                onClick={handleMenuItemClick}
                            />
                        } />
                        <ListItem content={
                            <ButtonLink
                                type='primary'
                                content='# Hire-Me!'
                                link='#hire-me'
                                onClick={handleMenuItemClick}
                            />
                        }/>
                    </List>
                </div>
            </nav>
        </>
    );
};

export default HeaderNav;
