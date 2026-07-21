interface IconSelectProps {
  icon: string;
  text: string;
  options: string[];
}

const IconSelect = ({ icon, text, options }: IconSelectProps) => {
  return (
    <div className='icon-select'>
      <label htmlFor={text}>
        <img src={icon} alt={text} />
        <span>{text}</span>
      </label>

      <select id={text}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IconSelect;
