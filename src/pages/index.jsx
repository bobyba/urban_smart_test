import { TextField } from '@material-ui/core';
import { Button, DatePicker } from 'antd';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setAuthThunk } from '../redux/userInfo/thunks';
import { useHistory, useLocation } from 'umi';
import { useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';

function IndexPage({ children, setAuthThunk }) {
  const history = useHistory();
  const location = useLocation();

  const [localStorage, setLocalStorage] = useLocalStorageState('user', {});

  useEffect(() => {
    if (!localStorage.authStatus) {
      location.pathname !== '/' && history.push(`/`);
    } else {
      setAuthThunk(localStorage);
    }
  }, [localStorage.authStatus]);

  return children;
}

const mapDispatchToProps = { setAuthThunk };

export default compose(connect(() => {}, mapDispatchToProps))(IndexPage);
