import React, { useState } from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  value = "",
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {/* 제목 */}
      <label
        className="text-[14px] font-medium leading-[20px] tracking-[-0.28px] text-content-additive"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {label}
      </label>

      {/* 입력 필드 */}
      <div
        className="w-full rounded-[12px] backdrop-blur bg-background-fill-regular px-4 py-3"
      >
        <textarea
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full text-sm text-gray-800 bg-transparent border-none outline-none resize-none 
                     font-medium tracking-[-0.28px]"
          rows={4}
          style={{
            fontFamily: 'var(--Family, "SUIT Variable")',
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
          }}
        />
      </div>
    </div>
  );
};