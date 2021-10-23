import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default (props) => {
  const defaultTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },

    palette: {
      primary: {
        main: '#F58220',
        contrastText: '#fff',
      },
      secondary: {
        main: '#D33427',
        contrastText: '#fff',
      },
    },
    textField: {
      '& .MuiFormLabel-root.Mui-focused': {
        color: 'black',
      },
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(245, 130, 32, 0.57)',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(245, 130, 32, 1.0)',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(245, 130, 32, 1.0)',
      },
    },
  });

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <Provider store={store}>{props.children}</Provider>
    </MuiThemeProvider>
  );
};
