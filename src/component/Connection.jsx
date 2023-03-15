import React, {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import Login_account_svg from './Login_account_svg';
import Login_password_svg from './Login_password_svg';
import axios from '../api/axios';

const LOGIN_URL = '/auth';


const Connection = () => {
    const grandiant1_account_login = '#FF9571';
    const grandiant2_account_login = '#FA7556';

    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect (() => {
        userRef.current.focus();
    }, []);

    useEffect (() =>{
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true 
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No server response');
            } else if (errMsg.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (errMsg.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else{
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to home</a>
                    </p>
                </section>
            ) : (
                <section className='h-[35rem] flex flex-col justify-center items-center font-lato text-white pt-7'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="asserive">{errMsg}</p>
                    <form onSubmit={handleSubmit} className='w-3/4 flex flex-col items-center p-5 mb-[8%]'>
                        <h2 className='w-full text-3xl xl:text-6xl mb-4 text-center font-extrabold xl:mb-12'>User login</h2>
                        <div className='w-[87%] flex flex-row items-center mt-5'>
                            <label htmlFor='username' className='w-[11%] xl:w-[5%] absolute text-xl p-3 bg-login rounded-3xl xl:rounded-full border-2 border-white border-opacity-30'>
                                <Login_account_svg
                                grandient1_account_login={grandiant1_account_login}
                                grandient2_account_login={grandiant2_account_login}
                                />
                            </label>
                            <input
                            type='text'
                            name='mail'
                            id='username'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value = {user}
                            required
                            placeholder='john.doe@abc.com'
                            className='rounded-3xl ml-1 pl-12 xl:pl-20 bg-login h-9 xl:h-12 xl:w-full'
                            />
                        </div>
                        <div className='w-[87%] flex flex-row items-center mt-7 xl:mt-14'>
                            <label htmlFor='password' className='w-[11%] xl:w-[5%] absolute text-xl p-3 bg-login rounded-3xl xl:rounded-full border-2 border-white border-opacity-30'>
                                <Login_password_svg
                                grandient1_account_login={grandiant1_account_login}
                                grandient2_account_login={grandiant2_account_login}
                                />
                            </label>
                            <input
                            type='password'
                            name='mail'
                            id='password'
                            onChange={(e) => setPwd(e.target.value)}
                            value = {pwd}
                            required
                            placeholder='xxx'
                            className='rounded-3xl ml-1 pl-12 xl:pl-20 bg-login h-9 xl:h-12 xl:w-full'
                            />
                        </div>
                        <button
                        type='submit'
                        className='w-[87%] xl:h-12 mt-7 rounded-3xl text-black xl:text-2xl bg-white font-extrabold pt-1 pl-2 pb-1 pr-2 hover:bg-orange_light hover:text-white xl:mt-14'
                        >
                        LOGIN
                        </button>
                    </form>
                    <p>
                        Need an Account ? <br />
                        <span>
                            <a href="#">Sign up</a>
                        </span>
                    </p>
                </section>
            )}
        
        </>
    );
};

export default Connection;
