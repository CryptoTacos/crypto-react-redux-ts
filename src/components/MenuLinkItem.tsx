import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

interface MenuLinkItemProps extends RouteComponentProps<{}> {
  linkTo: string;
  exact: boolean;
}

class MenuLinkItem extends React.Component<MenuLinkItemProps> {
  handleMenuClick = () => {
    this.props.history.push(`${this.props.linkTo}`);
  }

  render() {
    return (
      <MenuItem
        onClick={this.handleMenuClick}
      >
        {this.props.children}
      </MenuItem>
    );
  }
}

const EnhancedMenuLinkItem = withRouter(MenuLinkItem);

export default EnhancedMenuLinkItem;
