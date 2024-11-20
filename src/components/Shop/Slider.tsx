import React, { useRef, useEffect } from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export function Slider({ min, max, value, onChange }: SliderProps) {
  const minThumbRef = useRef<HTMLDivElement>(null);
  const maxThumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<'min' | 'max' | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !trackRef.current) return;

      const track = trackRef.current.getBoundingClientRect();
      const percentage = Math.min(Math.max((e.clientX - track.left) / track.width, 0), 1);
      const newValue = Math.round(min + percentage * (max - min));

      if (isDraggingRef.current === 'min') {
        onChange([Math.min(newValue, value[1] - 1), value[1]]);
      } else {
        onChange([value[0], Math.max(newValue, value[0] + 1)]);
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = null;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    if (isDraggingRef.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [min, max, value, onChange]);

  const getLeftPosition = (val: number) => {
    return ((val - min) / (max - min)) * 100;
  };

  return (
    <div className="relative py-4">
      <div
        ref={trackRef}
        className="h-2 bg-gray-200 rounded-full cursor-pointer"
        onClick={(e) => {
          if (!trackRef.current) return;
          const track = trackRef.current.getBoundingClientRect();
          const percentage = (e.clientX - track.left) / track.width;
          const newValue = Math.round(min + percentage * (max - min));
          
          // Determine which thumb to move based on proximity
          const distToMin = Math.abs(getLeftPosition(value[0]) / 100 - percentage);
          const distToMax = Math.abs(getLeftPosition(value[1]) / 100 - percentage);
          
          if (distToMin < distToMax) {
            onChange([Math.min(newValue, value[1] - 1), value[1]]);
          } else {
            onChange([value[0], Math.max(newValue, value[0] + 1)]);
          }
        }}
      >
        <div
          className="absolute h-2 bg-blue-600 rounded-full"
          style={{
            left: `${getLeftPosition(value[0])}%`,
            right: `${100 - getLeftPosition(value[1])}%`,
          }}
        />
        
        {/* Min thumb */}
        <div
          ref={minThumbRef}
          className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1 -ml-2 cursor-grab active:cursor-grabbing"
          style={{ left: `${getLeftPosition(value[0])}%` }}
          onMouseDown={() => {
            isDraggingRef.current = 'min';
          }}
        />
        
        {/* Max thumb */}
        <div
          ref={maxThumbRef}
          className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1 -ml-2 cursor-grab active:cursor-grabbing"
          style={{ left: `${getLeftPosition(value[1])}%` }}
          onMouseDown={() => {
            isDraggingRef.current = 'max';
          }}
        />
      </div>
    </div>
  );
}