import React, { ChangeEventHandler } from 'react';

type TextInputProps = {
  invalidMessage?: string;
  isInvalid?: boolean;
  label: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<TextInputProps> = ({
  invalidMessage = 'Invalid value',
  isInvalid,
  label,
  value,
  onChange,
}) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="text"
      className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
      value={value}
      onChange={onChange}
    />
    {isInvalid ? (
      <div className="invalid-feedback">{invalidMessage}</div>
    ) : null}
  </div>
);

export default TextInput;
