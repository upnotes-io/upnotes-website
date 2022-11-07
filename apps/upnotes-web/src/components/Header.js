import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import Icon from '@material-ui/core/Icon';
import ReactGA from 'react-ga';
const headersData = [
  {
    label: 'Report Issue',
    href: 'https://github.com/upnotes-io/upnotes-website/issues/new',
    target: '_blank',
    eventLabel: 'report_issue',
  },
  // {
  //   label: "Blogs",
  //   href: "/blog",
  //   target: "none",
  // },
  {
    label: 'Download',
    href: '#download',
    eventLabel: 'download_header',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    background: '#f9b296',
    paddingRight: '79px',
    paddingLeft: '79px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 6,
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
    color: 'black',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  imageIcon: {
    display: 'flex',
    height: 'inherit',
    width: 'inherit',
    alignSelf: 'center',
  },
  iconRoot: {
    textAlign: 'center',
    height: '48px',
    width: '48px',
  },
  headerBrand: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default function Header() {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    iconRoot,
    imageIcon,
    headerBrand,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {upnotesLogo}
        <div className="sm:flex sm:flex-column">{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={`${drawerContainer} flex flex-col`}>
            {getDrawerChoicesMobile()}
          </div>
        </Drawer>

        <div>{upnotesLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoicesMobile = () => {
    return headersData.map(({ label, href, target }) => {
      return (
        <a
          {...{
            href: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
            target,
          }}
        >
          {label}
        </a>
      );
    });
  };

  const upnotesLogo = (
    <a href={'/'} className={headerBrand}>
      <Icon className={iconRoot}>
        <img className={imageIcon} src="/assets/icon.svg" alt="logo" />
      </Icon>
      <Typography variant="h6" component="h1" className={logo}>
        Upnotes
      </Typography>
    </a>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, target, eventLabel }) => {
      return (
        <ReactGA.OutboundLink
          {...{
            key: label,
            color: 'inherit',
            to: href,
            eventLabel: eventLabel,
            target,
            className: menuButton,
          }}
        >
          {label}
        </ReactGA.OutboundLink>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
