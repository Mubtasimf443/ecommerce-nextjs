/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
import React, { useState, useEffect, useCallback } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
  showMinMaxLabels?: boolean;
  minLabel?: string;
  maxLabel?: string;
  valueLabel?: string | ((value: number) => string);
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  defaultValue,
  onChange,
  label,
  showMinMaxLabels = true,
  minLabel,
  maxLabel,
  valueLabel,
  className = '',
}) => {
  const initialValue = defaultValue !== undefined ? defaultValue : (min + max) / 2;
  const [value, setValue] = useState<number>(initialValue);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  }, [onChange]);

  const getValueLabel = useCallback(() => {
    if (!valueLabel) return value;
    if (typeof valueLabel === 'function') return valueLabel(value);
    return `${value} ${valueLabel}`;
  }, [value, valueLabel]);

  // Calculate the percentage for the thumb position
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      {label && (
        <h4 className='text-dark-text-primary font-medium mb-1 flex items-center'>
          <span className='border-l-4 border-dark-accent pl-2'>{label}</span>
        </h4>
      )}
      
      <div className="relative pt-1 w-full">
        <div className="flex items-center justify-between mb-2">
          {valueLabel && (
            <div 
              className={`absolute -top-8 transform -translate-x-1/2 transition-all duration-200 ease-out ${isDragging ? 'scale-110' : ''}`} 
              style={{ left: `${percentage}%` }}
            >
              <div className="bg-dark-accent text-white text-xs font-bold py-1 px-2 rounded shadow-md">
                {getValueLabel()}
              </div>
              <div className="w-2 h-2 bg-dark-accent transform rotate-45 mx-auto -mt-1"></div>
            </div>
          )}
        </div>
        
        <div className="relative">
          {/* Track background */}
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          
          {/* Filled track */}
          <div 
            className="absolute h-2 bg-dark-accent rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
          
          {/* Thumb */}
          <input 
            type="range" 
            min={min} 
            max={max} 
            step={step}
            value={value}
            onChange={handleChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
          />
          
          <div 
            className={`absolute h-5 w-5 bg-white border-2 border-dark-accent rounded-full text-black shadow transform -translate-y-1/2 transition-transform ${isDragging ? 'scale-125' : ''}`}
            style={{ left: `${percentage}%`, top: '50%' }}
          ></div>
        </div>
      </div>
      
      {showMinMaxLabels && (
        <div className='flex justify-between mt-1'>
          <span className='text-dark-text-secondary text-xs font-medium'>{minLabel || min}</span>
          <span className='text-dark-text-secondary text-xs font-medium'>{maxLabel || max}</span>
        </div>
      )}
    </div>
  );
};

export default Slider;
