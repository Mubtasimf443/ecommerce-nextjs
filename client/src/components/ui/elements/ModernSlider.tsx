/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/
"use client"
import React, { useState, useEffect, useRef } from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
  trackColor?: string;
  thumbColor?: string;
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
  formatValue?: (value: number) => string;
}

const ModernSlider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  defaultValue,
  value: propValue,
  onChange,
  label,
  showValue = true,
  disabled = false,
  trackColor = 'bg-indigo-500',
  thumbColor = 'bg-indigo-600',
  size = 'md',
  showTooltip = true,
  formatValue = (value: number) => value.toString()
}) => {
  // Determine if component is controlled or uncontrolled
  const isControlled = propValue !== undefined;
  const [internalValue, setInternalValue] = useState<number>(
    isControlled ? propValue : (defaultValue ?? min)
  );
  
  // Update internal value when controlled value changes
  useEffect(() => {
    if (isControlled) {
      setInternalValue(propValue);
    }
  }, [isControlled, propValue]);
  
  // Get the actual value
  const value = isControlled ? propValue : internalValue;
  
  // Calculate percentage for styling
  const percentage = ((value - min) / (max - min)) * 100;
  
  // Track refs
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltipValue, setShowTooltipValue] = useState(false);
  
  // Handle value change
  const handleChange = (newValue: number) => {
    // Constrain value
    const constrainedValue = Math.min(Math.max(newValue, min), max);
    // Round to step
    const steppedValue = Math.round(constrainedValue / step) * step;
    
    if (!isControlled) {
      setInternalValue(steppedValue);
    }
    
    if (onChange) {
      onChange(steppedValue);
    }
  };
  
  // Handle click on track
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    const track = trackRef.current;
    if (!track) return;
    
    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPercentage = (x / rect.width) * 100;
    const newValue = min + (newPercentage / 100) * (max - min);
    
    handleChange(newValue);
  };
  
  // Handle thumb drag
  const handleThumbMouseDown = () => {
    if (disabled) return;
    setIsDragging(true);
    setShowTooltipValue(true);
  };
  
  // Handle mouse move during drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const track = trackRef.current;
      if (!track) return;
      
      const rect = track.getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const newPercentage = (x / rect.width) * 100;
      const newValue = min + (newPercentage / 100) * (max - min);
      
      handleChange(newValue);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      setTimeout(() => setShowTooltipValue(false), 1000);
    };
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, min, max, handleChange]);
  
  // Determine size classes
  const sizeClasses = {
    sm: {
      track: 'h-1',
      thumb: 'w-3 h-3',
      thumbActive: 'w-4 h-4',
      label: 'text-xs',
    },
    md: {
      track: 'h-2',
      thumb: 'w-5 h-5',
      thumbActive: 'w-6 h-6',
      label: 'text-sm',
    },
    lg: {
      track: 'h-3',
      thumb: 'w-6 h-6',
      thumbActive: 'w-7 h-7',
      label: 'text-base',
    },
  };
  
  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <label className={`font-medium ${sizeClasses[size].label} ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
              {label}
            </label>
          )}
          {showValue && (
            <span className={`${sizeClasses[size].label} ${disabled ? 'text-gray-400' : 'text-gray-600'}`}>
              {formatValue(value)}
            </span>
          )}
        </div>
      )}
      
      <div 
        ref={trackRef}
        className={`relative ${sizeClasses[size].track} w-full rounded-full bg-gray-200 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleTrackClick}
      >
        <div
          className={`absolute top-0 left-0 h-full rounded-full ${trackColor} transition-all duration-150`}
          style={{ width: `${percentage}%` }}
        />
        
        <div
          ref={thumbRef}
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isDragging ? sizeClasses[size].thumbActive : sizeClasses[size].thumb
          } rounded-full ${thumbColor} shadow-md transition-all duration-150 ${
            disabled ? 'cursor-not-allowed' : 'cursor-grab'
          } ${isDragging ? 'cursor-grabbing scale-110 shadow-lg' : ''}`}
          style={{ left: `${percentage}%` }}
          onMouseDown={handleThumbMouseDown}
          onMouseEnter={() => setShowTooltipValue(true)}
          onMouseLeave={() => !isDragging && setShowTooltipValue(false)}
        >
          {showTooltip && showTooltipValue && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-90">
              {formatValue(value)}
            </div>
          )}
        </div>
      </div>
      
      {/* Show min/max markers (optional) */}
      <div className="flex justify-between mt-1">
        <span className={`${sizeClasses[size].label} text-gray-500`}>{formatValue(min)}</span>
        <span className={`${sizeClasses[size].label} text-gray-500`}>{formatValue(max)}</span>
      </div>
    </div>
  );
};

export default ModernSlider;
