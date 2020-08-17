import React, { Component } from "react";
import PropTypes from "prop-types";

import "./buttonStyle.scss";

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    buttonStyles: PropTypes.object,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const {
      props: { label },
    } = this;
    return (
      <button
        className={`rd-button  ${this.props.className}`}
        style={{ ...this.props.buttonStyles }}
        {...this.props}
      >
        {this.props.children} {label}{" "}
      </button>
    );
  }
}

Button.defaultProps = {
  className : 'primary'
}

export default Button;
