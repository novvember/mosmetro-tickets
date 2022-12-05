import classNames from 'classnames';
import './Axis.css';
import React from 'react';
import { connect } from 'react-redux';

type AxisProps = {
  isX?: boolean;
  isY?: boolean;
  className: string;
  children: React.ReactNode;
  maxXNumber: number;
  maxYNumber: number;
  step: number;
};

function Axis({
  isX = false,
  isY = false,
  className,
  children,
  maxXNumber,
  maxYNumber,
  step,
}: AxisProps) {
  const MIN = 0;
  const max = isX ? maxXNumber : maxYNumber;

  const numbers = new Array((max - MIN) / step + 1)
    .fill(0)
    .map((_, i) => 0 + i * step);

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

function mapStateToProps(state: any) {
  return {
    maxXNumber: state.appConfig.maxXNumber,
    maxYNumber: state.appConfig.maxYNumber,
    step: state.appConfig.step,
  };
}

export default connect(mapStateToProps)(Axis);
