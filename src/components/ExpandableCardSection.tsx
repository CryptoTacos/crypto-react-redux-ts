import * as React from 'react';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
interface ExpandableCardSectionProps {

}

interface ExpandableCardSectionState {
  expanded: boolean;
}

class ExpandableCardSection extends React.Component<ExpandableCardSectionProps, ExpandableCardSectionState> {
  constructor(props: ExpandableCardSectionProps) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggleExpansion = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ expanded: !this.state.expanded });
    e.preventDefault();
  }

  renderExpandableInfoArrow = (): JSX.Element => {
    return this.state.expanded ? (
      <div className="expandible-info-arrow" onClick={this.toggleExpansion}>
        <p>Collapse</p>
        <i className="fa fa-chevron-up" />
      </div>
    ) : (
        <div className="expandible-info-arrow" onClick={this.toggleExpansion}>
          <p>More Info</p>
          <i className="fa fa-chevron-down" />
        </div>
      );
  }

  renderExpandableContent = () => {
    return this.state.expanded ? <div>{this.props.children}</div> : null;
  }

  render(): JSX.Element {
    return (

      <div className="coin-card-expandible-details">
        {this.renderExpandableInfoArrow()}
        <div className="coin-card-expandible-detail-expanded">
          <CSSTransitionGroup
            transitionName="expand-height"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={200}
          >
            {this.renderExpandableContent()}
          </CSSTransitionGroup>
        </div>
      </div >

    );
  }
}

export default ExpandableCardSection;
