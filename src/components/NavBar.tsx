import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import * as ReactDOM from 'react-dom';
import MenuLinkItem from './MenuLinkItem';
import { Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface NavBarProps {

}
interface NavBarState {
  isMenuVisible: boolean;
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  private menuDrawerRef: React.ReactInstance;

  constructor(props: NavBarProps) {
    super(props);
    this.state = {
      isMenuVisible: false,
    };
    this.componentDidMount = () => {
      window.addEventListener('click', this.handleOutsideClick);
    };
    this.componentWillUnmount = () => {
      window.removeEventListener('click', this.handleOutsideClick);
    };
  }

  setMenuDrawerRef = (node: any) => {
    this.menuDrawerRef = node;
  }

  handleMenuBtnClick = (e: any) => {
    e.stopPropagation();
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  handleOutsideClick = (e: Event) => {

    const node: Element | Text = ReactDOM.findDOMNode(this.menuDrawerRef)
      ? ReactDOM.findDOMNode(this.menuDrawerRef) : Object.assign({});
    if (this.menuDrawerRef && e.target instanceof HTMLElement &&
      node.contains(e.target)) {
      this.setState({ isMenuVisible: false });
      console.log('clicked outside menu');
      return;
    }
    console.log('clicked inside menu');
    return;

  }

  /* tslint:disable */
  renderMenu = () => {
    return this.state.isMenuVisible ? (
      <Drawer
        open={this.state.isMenuVisible}
        innerRef={this.setMenuDrawerRef}

      >
        <div
          className="side-menu-drawer"
          onClick={this.handleMenuBtnClick}
        >
          <MenuLinkItem exact={true} linkTo="/">Home</MenuLinkItem>
          <MenuLinkItem exact={true} linkTo="/about">About</MenuLinkItem>
          <MenuLinkItem exact={true} linkTo="/welcome">Welcome</MenuLinkItem>
        </div>
      </Drawer>
    ) : null;
  }

  render() {
    return (
      <AppBar
        title="Crypto App"
        position="sticky"
      >
        <Toolbar>
          <IconButton aria-label="Menu">
            <MenuIcon
              onClick={this.handleMenuBtnClick} />
          </IconButton>
        </Toolbar>
        {this.renderMenu()}
      </AppBar>
    );
  }
}
