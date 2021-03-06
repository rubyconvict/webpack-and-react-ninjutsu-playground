import React from 'react';
import InputWrapper from './InputWrapper';
import BaseInput from './BaseInput';

class TextareaInput extends BaseInput {

  render() {
    return (
      <InputWrapper errors={this.props.errors}>
        <label>{this.props.name}</label>
        <textarea
          className={this.props.className}
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange} />
      </InputWrapper>
    )
  }

}

export default TextareaInput;
