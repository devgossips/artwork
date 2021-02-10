import React from 'react';
import PropTypes from 'prop-types';
import 'css-doodle';

class Doodle extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.redraw();
  }

  redraw() {
    this.props.doodleRef.current.update();
  }

  render() {
    const { seed, name, styleCode, doodleCode, doodleRef } = this.props;

    return (
      <div>
        <style>
          {`
          css-doodle#${name} {
            ${styleCode}
          }
        `}
        </style>

        <css-doodle id={name} seed={seed} use="var(--rule)" ref={doodleRef}>
          {`
            ${doodleCode}
          `}
        </css-doodle>
      </div>
    );
  }
}

Doodle.defaultProps = {
  seed: '0000',
};

Doodle.propTypes = {
  seed: PropTypes.string,
  name: PropTypes.string,
  styleCode: PropTypes.string,
  doodleCode: PropTypes.string,
};

export default Doodle;
