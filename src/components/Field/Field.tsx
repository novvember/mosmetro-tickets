import { connect } from 'react-redux';
import React from 'react';
import './Field.css';

type FieldProps = {
  className: string;
  children: React.ReactNode;
  fieldMax: number;
};

function Field({ className, children, fieldMax }: FieldProps) {
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

function mapStateToProps(state: any) {
  return {
    fieldMax: state.appConfig.fieldMax,
  };
}

export default connect(mapStateToProps)(Field);
