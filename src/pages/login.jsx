import { TextField, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { setAuthThunk } from '../redux/userInfo/thunks';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { useLocalStorageState, useSetState } from 'ahooks';

import { message } from 'antd';
import { useHistory, useLocation } from 'umi';

import { useCallback } from 'react';

function IndexPage({ setAuthThunk }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
      width: '300px',
    },
    btn: { marginTop: '20px', width: '110px' },
  }));

  const [state, setState] = useSetState({ login: '', password: '' });

  const history = useHistory();
  const s = useStyles();

  const [localStorage, setLocalStorage] = useLocalStorageState('user', {
    authStatus: false,
    login: '',
    password: '',
  });

  const disabledStatus = useCallback(
    () => !(state.login === 'developer21' && state.password === '123456'),
    [state],
  );

  const clickBtnDis = () =>
    !disabledStatus() || message.error('Error, enter login and password');

  if (localStorage.authStatus) {
    setAuthThunk(localStorage);
    useHistory().push('/profile');
  }

  return (
    <div className={s.root}>
      <div className={s.main}>
        <TextField
          value={state.login}
          onChange={(e) => setState({ login: e.target.value })}
          type="login"
          autoComplete="login"
          label="Логин"
          size="small"
          variant="outlined"
          fullWidth
        />

        <TextField
          value={state.password}
          onChange={(e) => setState({ password: e.target.value })}
          fullWidth
          type="password"
          label="Пароль"
          size="small"
          variant="outlined"
        />
        <div onClick={clickBtnDis}>
          <Button
            className={s.btn}
            disabled={disabledStatus()}
            onClick={() => {
              setAuthThunk({ ...state, authStatus: true });
              setLocalStorage({ ...state, authStatus: true });
              history.push('/');
            }}
            variant="contained"
            color="primary"
            size="small"
          >
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = { setAuthThunk };

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default compose(connect(() => {}, mapDispatchToProps))(IndexPage);
