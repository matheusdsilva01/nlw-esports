import { InputHTMLAttributes } from 'react';

interface CheckboxDayWeekprops extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

const CheckboxDayWeek = (props: CheckboxDayWeekprops) => {
  return (
    <div className="w-8 h-8">
      <input {...props} type="checkbox" className="hidden peer" />
      <label
        className="font-bold w-full h-full flex items-center justify-center rounded bg-zinc-900 peer-checked:bg-violet-500  selection:bg-none"
        htmlFor={props.id}
      >
        {props.text}
      </label>
    </div>
  );
};

export default CheckboxDayWeek;
