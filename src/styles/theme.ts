const theme = {
  layout: {
    headerHeight: '70px',
    sidebarWidth: '200px',
  },
  colors: {
    logoBlue: '#2E569D',
    lightBlue: '#bfd8ff',
    red: 'rgb(245, 0, 0)',
  },
  button: {
    main: {
      default: {
        backgroundColor: '#2E569D',
        color: 'white',
        boxShadow: '3px 3px 3px 0px #0000001A',
      },
      hover: {
        backgroundColor: '#19427e',
      },
      disabled: {},
    },
    white: {
      default: {
        boxShadow: '3px 3px 3px 0px #0000001A',
        color: '#2E569D',
      },
      hover: {
        color: '#19427e',
      },
      disabled: { color: '#bfd8ff' },
    },
  },
};

export default theme;
