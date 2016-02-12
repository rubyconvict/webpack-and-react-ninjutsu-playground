import { merge } from 'lodash';

import React from 'react';
import InputWrapper from './InputWrapper';
import BaseInput from './BaseInput';

class TextInput extends BaseInput {

  render() {
    return (
      <InputWrapper errors={this.props.errors}>
        <label>{this.props.name}</label>
        <input type="text"
          autoFocus={this.props.autoFocus}
          className={this.props.className}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange} />
      </InputWrapper>
    )
  }

}

TextInput.propTypes = merge({}, BaseInput.propTypes, {
  autoFocus: React.PropTypes.bool
});

TextInput.defaultProps = merge({}, BaseInput.defaultProps, {
  autoFocus: false
});

export default TextInput;
