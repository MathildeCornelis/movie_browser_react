import React from 'react';

const HomeIcon_svg = ({ grandient1, grandient2}) => (
    <svg width="27" height="28" viewBox="0 0 27 28" fill="url(#gradient_home)" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66724 25.4391V21.4464C9.66722 20.4309 10.4951 19.6057 11.5209 19.5989H15.2784C16.3091 19.5989 17.1446 20.426 17.1446 21.4464V25.4515C17.1444 26.3137 17.8395 27.0184 18.7102 27.0386H21.2152C23.7124 27.0386 25.7367 25.0346 25.7367 22.5624V11.2043C25.7234 10.2318 25.2621 9.3185 24.4842 8.72441L15.9172 1.89222C14.4163 0.702595 12.2828 0.702595 10.782 1.89222L2.25249 8.73681C1.47164 9.32849 1.00962 10.2433 1 11.2167V22.5624C1 25.0346 3.02434 27.0386 5.5215 27.0386H8.02648C8.91881 27.0386 9.64219 26.3225 9.64219 25.4391" fill="url(#gradient_home)" />
        </g>
        <defs>
            <linearGradient id="gradient_home" x1="50%" y1="30%" x2="0%" y2="100%">
                <stop offset="0%" stop-color={grandient1} />
                <stop offset="50%" stop-color={grandient2} />
            </linearGradient>
        </defs>
    </svg>

)

export default HomeIcon_svg;