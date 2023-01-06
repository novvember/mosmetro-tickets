import React from 'react';
import './Field.css';
import { useAppSelector } from '../../store';
import classNames from 'classnames';
import { selectFieldMax } from '../../store/ticketsSlice';

type FieldProps = {
  className: string;
  children: React.ReactNode;
};

function Field({ className, children }: FieldProps) {
  const fieldMax = useAppSelector(selectFieldMax);

  return (
    <div
      className={classNames("field", className)}
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
