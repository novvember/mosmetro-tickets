import classNames from 'classnames';
import './Axis.css';
import React from 'react';
import { useAppSelector } from '../../store';
import { fieldMaxSelector, fieldStepSelector } from '../../store/selectors';

type AxisProps = {
  isX?: boolean;
  isY?: boolean;
  className: string;
  children: React.ReactNode;
};

function Axis({ isX = false, isY = false, className, children }: AxisProps) {
  const MIN = 0;

  const fieldMax = useAppSelector(fieldMaxSelector);
  const fieldStep = useAppSelector(fieldStepSelector);

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

export default Axis;
