import { useState } from 'react';
import Image from 'next/image';
import classes from './AuthForm.module.css';
import lockIcon from '../utils/icon/lock.png';
import userIcon from '../utils/icon/user.png';
import { useRouter } from 'next/router';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handelSignInButton = () => {
    router.push('/');
  };

  return (
    <section className={classes.auth}>
      {/* <h1>{isLogin ? 'Login' : 'Sign Up'}</h1> */}
      <form>
        <div className={classes.control}>
          <label htmlFor="text">
            <Image className={classes.icon} alt="id icon" src={lockIcon} />
            ID
          </label>
          <input type="text" id="text" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">
            {' '}
            <Image
              alt="password icon"
              className={classes.icon}
              src={userIcon}
            />
            PASSWORD
          </label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <div>
            <input type="checkbox" />
            <label>아이디 저장</label>
          </div>
          <button onClick={handelSignInButton}>SIGN IN</button>
          {/* <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
