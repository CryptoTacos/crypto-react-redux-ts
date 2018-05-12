import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import * as ReactDOM from 'react-dom';
import MenuLinkItem from './MenuLinkItem';

interface NavBarProps {

}
interface NavBarState {
  isMenuVisible: boolean;
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  private menuDrawerRef: React.ReactInstance;

  constructor() {
    super();
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

  setMenuDrawerRef = (node: Drawer) => {
    this.menuDrawerRef = node;
  }

  handleMenuBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }

  handleOutsideClick = (e: Event) => {
    if (this.menuDrawerRef && e.target instanceof HTMLElement &&
      !ReactDOM.findDOMNode(this.menuDrawerRef).contains(e.target)) {
      this.setState({ isMenuVisible: false });
      console.log('clicked outside menu');
      return;
    }
    console.log('clicked inside menu');
    return;

  }

  renderMenu = () => {
    return this.state.isMenuVisible ? (
      <Drawer
        open={this.state.isMenuVisible}
        ref={this.setMenuDrawerRef}
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
        onLeftIconButtonClick={this.handleMenuBtnClick}
      >
        {this.renderMenu()}
      </AppBar>
    );
  }
}
