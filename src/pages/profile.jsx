import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { setAuthThunk } from '../redux/userInfo/thunks';

import { useLocalStorageState } from 'ahooks';

import { useHistory } from 'umi';
import { message } from 'antd';

function IndexPage({ login, setAuthThunk }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
    },
    btn: { marginTop: '20px', width: '110px' },
  }));

  const s = useStyles();
  const history = useHistory();

  const [localStorage, setLocalStorage] = useLocalStorageState('user', {});

  return (
    <div className={s.root}>
      <h1>Login: {login}</h1>
      <Button
        className={s.btn}
        onClick={() => {
          setAuthThunk({ login: '', password: '', authStatus: false });
          setLocalStorage({ login: '', password: '', authStatus: false });
          history.push('/');
          message.success('Success');
        }}
        variant="contained"
        color="primary"
        size="small"
      >
        Выйти
      </Button>
    </div>
  );
}

const mapDispatchToProps = { setAuthThunk };

const mapStateToProps = (state, ownProps) => {
  return { login: state.user_info.login };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(IndexPage);
