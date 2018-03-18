import * as React from 'react';

interface ExpandibleCardSectionProps {

}

interface ExpandibleCardSectionState {
  expanded: boolean;
}

class ExpandibleCardSection extends React.Component<ExpandibleCardSectionProps, ExpandibleCardSectionState> {
  constructor(props: ExpandibleCardSectionProps) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  getExpandibleSectionClassName = (): string => {
    const { expanded } = this.state;
    const expandedClassParam = expanded ? 'expanded' : 'collapsed';
    return `coin-card-expandible-details ${expandedClassParam}`;
  }

  toggleExpansion = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ expanded: !this.state.expanded });
    e.preventDefault();
  }

  renderExpandibleInfoArrow = (): JSX.Element => {
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

  render(): JSX.Element {
    return (
      <div className={this.getExpandibleSectionClassName()}>
        {this.renderExpandibleInfoArrow()}
        <div className="coin-card-expandible-detail-expanded">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ExpandibleCardSection;
