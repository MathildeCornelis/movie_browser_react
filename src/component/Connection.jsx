import React from 'react';

const Connection = () => {
    return (
        <section className='h-[35rem] flex justify-center items-center font-lato text-white pt-7'>
            <div className='w-3/4 flex flex-col items-start p-5 pl-14'>
                <h2 className='text-3xl mb-4'>Login</h2>
                <label htmlFor="mail" className='text-xl mb-2'>Email address</label>
                <input type="text" name='mail' placeholder='john.doe@abc.com' className='rounded-md mt-1 pl-2 border-[1px] bg-transparent border-orange_light focus:border-orange_dark focus:border-[3px]'/>
                <label htmlFor="password" className='text-xl mb-2 mt-3'>Email address</label>
                <input type="password" name='password' placeholder='xxx' className='rounded-md mt-1 pl-2 border-[1px] bg-transparent border-orange_light focus:border-orange_dark focus:border-[3px]'/>
                <button type="submit" className='border-[1px] border-orange_light bg-transparent mt-5 rounded-md text-white pt-1 pl-2 pb-1 pr-2 hover:bg-orange_light'>Login</button>
            </div>
        </section>
    );
};

export default Connection;