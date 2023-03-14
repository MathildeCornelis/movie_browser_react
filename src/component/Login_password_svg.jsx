import React from 'react';

const Login_password_svg = ({grandient1_account_login, grandient2_account_login}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="url(#gradient_account)" viewBox="0 0 448 512">
            <path d="M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"/>
            <defs>
                <linearGradient id="gradient_account" x1="50%" y1="30%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={grandient1_account_login} />
                    <stop offset="50%" stopColor={grandient2_account_login} />
                </linearGradient>            
            </defs>
        </svg>
    );
};

export default Login_password_svg;