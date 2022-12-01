import { connect } from 'react-redux';
import React from 'react';
import './Field.css';

type FieldProps = {
  className: string;
  children: React.ReactNode;
  maxXNumber: number;
  maxYNumber: number;
};

function Field({ className, children, maxXNumber, maxYNumber }: FieldProps) {
  return (
    <div
      className="field"
      style={{
        gridTemplateColumns: `repeat(${maxXNumber + 1}, 1fr)`,
        gridTemplateRows: `repeat(${maxYNumber + 1}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    maxXNumber: state.config.maxXNumber,
    maxYNumber: state.config.maxYNumber,
  };
}

export default connect(mapStateToProps)(Field);
