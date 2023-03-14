import React from 'react';
import Login_account_svg from './Login_account_svg';
import Login_password_svg from './Login_password_svg';

const Connection = () => {
    const grandiant1_account_login = '#FF9571';
    const grandiant2_account_login = '#FA7556';

    return (
        <section className='h-[35rem] flex justify-center items-center font-lato text-white pt-7'>
            <div className='w-3/4 flex flex-col items-center p-5 mb-[8%]'>
                <h2 className='w-full text-3xl xl:text-6xl mb-4 text-center font-extrabold'>User login</h2>
                <div className='w-[87%] flex flex-row items-center mt-5'>
                    <label htmlFor='mail' className='w-[11%] xl:w-[5%] absolute text-xl p-3 bg-login rounded-3xl xl:rounded-full border-2 border-white border-opacity-30'>
                        <Login_account_svg
                        grandient1_account_login={grandiant1_account_login}
                        grandient2_account_login={grandiant2_account_login}
                        />
                    </label>
                    <input
                    type='text'
                    name='mail'
                    placeholder='john.doe@abc.com'
                    className='rounded-3xl pl-14 xl:pl-24 bg-login h-9 xl:h-12 xl:w-full'
                    />
                </div>
                <div className='w-[87%] flex flex-row items-center mt-7'>
                    <label htmlFor='mail' className='w-[11%] xl:w-[5%] absolute text-xl p-3 bg-login rounded-3xl xl:rounded-full border-2 border-white border-opacity-30'>
                        <Login_password_svg
                        grandient1_account_login={grandiant1_account_login}
                        grandient2_account_login={grandiant2_account_login}
                        />
                    </label>
                    <input
                    type='text'
                    name='mail'
                    placeholder='xxx'
                    className='rounded-3xl pl-14 xl:pl-24 bg-login h-9 xl:h-12 xl:w-full'
                    />
                </div>
                <button
                type='submit'
                className='w-[87%] xl:h-12 mt-7 rounded-3xl text-black xl:text-2xl bg-white font-extrabold pt-1 pl-2 pb-1 pr-2 hover:bg-orange_light hover:text-white'
                >
                LOGIN
                </button>
            </div>
        </section>
    );
};

export default Connection;
