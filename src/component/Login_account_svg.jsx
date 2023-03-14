import React from 'react';

const Login_account_svg = ({grandient1_account_login, grandient2_account_login}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="url(#gradient_account)" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
            <defs>
                <linearGradient id="gradient_account" x1="50%" y1="30%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={grandient1_account_login} />
                    <stop offset="50%" stopColor={grandient2_account_login} />
                </linearGradient>            
            </defs>
        </svg>
    );
};

export default Login_account_svg;