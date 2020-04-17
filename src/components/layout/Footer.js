import React from 'react';
import './footer.css';

const unsplashStyle = {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'none',
    padding: '4px 6px',
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica',
    fontWeight: 'bold',
    lineHeight: '1',
    display: 'inline-block',
    borderRadius: '3px'
}

const spanStyle = {
    display: 'inline-block',
    padding: '2px 3px'
}

const svgStyle = {
    height: '8px',
    width: 'auto',
    position: 'relative',
    verticalAlign: 'middle',
    top: '-2px',
    fill: 'white'
}

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-credit">Coded by Stephanie Aurelio</p>
            <p>Header image courtesy of {' '}
            <a style={unsplashStyle} href="https://unsplash.com/@sincerelymedia?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Sincerely Media">
            <span style={spanStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 32 32">
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z">
                    </path>
                </svg>
            </span>
            <span style={spanStyle}>Sincerely Media</span></a>
            </p>
            {' '}
        </div>
    )
}

export default Footer
