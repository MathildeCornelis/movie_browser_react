import React from 'react';

const SearchIcon_svg = ({ fillColor_search, grandient1_search, grandient2_search}) => (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="url(#gradient_search)" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M18.5 36.1367C28.2408 36.1367 36.1367 28.2408 36.1367 18.5C36.1367 8.76099 28.2408 0.863265 18.5 0.863265C8.75923 0.863265 0.863265 8.76099 0.863265 18.5C0.863265 28.2408 8.75923 36.1367 18.5 36.1367Z" stroke="url(#gradient)" stroke-width="0.27347" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <path d="M22.0057 19.805H21.3734L21.1492 19.5889C21.9337 18.6764 22.4059 17.4917 22.4059 16.203C22.4059 13.3293 20.0766 11 17.203 11C14.3293 11 12 13.3293 12 16.203C12 19.0766 14.3293 21.4059 17.203 21.4059C18.4917 21.4059 19.6764 20.9337 20.5889 20.1492L20.805 20.3734V21.0057L24.8073 25L26 23.8073L22.0057 19.805ZM17.203 19.805C15.2098 19.805 13.6009 18.1961 13.6009 16.203C13.6009 14.2098 15.2098 12.6009 17.203 12.6009C19.1961 12.6009 20.805 14.2098 20.805 16.203C20.805 18.1961 19.1961 19.805 17.203 19.805Z" fill={fillColor_search} />
        <defs>
            <linearGradient id="gradient_search" x1="50%" y1="30%" x2="0%" y2="100%">
                <stop offset="0%" stop-color={grandient1_search} />
                <stop offset="50%" stop-color={grandient2_search} />
            </linearGradient>
        </defs>
    </svg>
    
    );

export default SearchIcon_svg;