/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Checkbox({ text, className, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
}
