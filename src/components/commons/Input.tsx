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
    <div className="flex flex-col gap-1 w-full">
      {/* 라벨 */}
      <label
        className="text-[14px] font-medium text-content-additive tracking-[-0.28px] mb-1"
        style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
      >
        {label}
      </label>

      {/* 입력 영역 */}
      <div className="w-full bg-[#F5F5F5] rounded-[12px] px-4 py-3">
        <textarea
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full text-[14px] font-medium text-gray-800 leading-[20px] tracking-[-0.28px] resize-none bg-transparent outline-none"
          rows={4}
          style={{ fontFamily: 'var(--Family, "SUIT Variable")' }}
        />
      </div>
    </div>
  );
};