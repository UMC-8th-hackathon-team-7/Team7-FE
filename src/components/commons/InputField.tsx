import closeIcon from "../../assets/my_activity/ic_close.svg";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputField = ({
  label,
  placeholder = "",
  value = "",
  onChange,
}: InputFieldProps) => {
  return (
    <div className="relative">
      <label className="text-callout font-[500] text-[var(--color-additive)]">
        {label}
      </label>
      <input
        type="text"
        className="w-full h-[44px] pl-[12px] pr-[40px] py-[10px] bg-[var(--color-fill-regular)] rounded-[12px] text-body font-[400] placeholder-[var(--color-assistive)] focus:outline-none focus:border-[var(--color-subhead)]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {value && (
        <button
          className="absolute right-[12px] translate-y-[100%]"
          onClick={() => onChange?.("")}
        >
          <img src={closeIcon} alt="지우기" className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default InputField;
