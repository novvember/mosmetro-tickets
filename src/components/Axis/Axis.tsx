import classNames from 'classnames';
import './Axis.css';
import React from 'react';
import { connect } from 'react-redux';
import State from '../../types/State';

type AxisProps = {
  isX?: boolean;
  isY?: boolean;
  className: string;
  children: React.ReactNode;
  fieldMax: number;
  fieldStep: number;
};

function Axis({
  isX = false,
  isY = false,
  className,
  children,
  fieldMax,
  fieldStep,
}: AxisProps) {
  const MIN = 0;

  const numbers = new Array((fieldMax - MIN) / fieldStep + 1)
    .fill(0)
    .map((_, i) => 0 + i * fieldStep);

  return (
    <div
      className={classNames(
        'axis',
        className,
        { axis_type_x: isX },
        { axis_type_y: isY },
      )}
    >
      <span className="axis__label">{children}</span>

      <div className="axis__scale">
        {numbers.map((number) => {
          return (
            <span className="axis__scale-number" key={number}>
              {number}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function mapStateToProps(state: State) {
  return {
    fieldMax: state.appConfig.fieldMax,
    fieldStep: state.appConfig.fieldStep,
  };
}

export default connect(mapStateToProps)(Axis);
