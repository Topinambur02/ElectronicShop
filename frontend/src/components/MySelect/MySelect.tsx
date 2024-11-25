import { IProps } from "../../types/SelectTypes";
import style from "./MySelect.module.css"

const MySelect = ({options, defaultValue, value, onChange}: IProps) => {
  return (
    <select className={style.select} value={value} onChange={event => onChange(event.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
  );
}

export default MySelect;