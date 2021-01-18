import React, { ChangeEventHandler } from 'react';

type TextInputProps = {
  id?: string;
  invalidMessage?: string;
  isInvalid?: boolean;
  label: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput: React.FC<TextInputProps> = ({
  id = `id-${Math.random()}`,
  invalidMessage = 'Invalid value',
  isInvalid,
  label,
  value,
  onChange,
}) => (
  <div id={id} className="form-group">
    <label htmlFor={`${id}-input`}>{label}</label>
    <input
      id={`${id}-input`}
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
