import React from 'react';
import './Field.css';
import { useAppSelector } from '../../store';
import { fieldMaxSelector } from '../../store/selectors';

type FieldProps = {
  className: string;
  children: React.ReactNode;
};

function Field({ className, children }: FieldProps) {
  const fieldMax = useAppSelector(fieldMaxSelector);

  return (
    <div
      className="field"
      style={{
        gridTemplateColumns: `repeat(${fieldMax + 1}, 1fr)`,
        gridTemplateRows: `repeat(${fieldMax + 1}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

export default Field;
