import React from 'react';
import './Field.css';

type FieldProps = {
  className: string;
  children: React.ReactNode;
};

function Field({ className, children }: FieldProps) {
  return <div className="field">{children}</div>;
}

export default Field;
