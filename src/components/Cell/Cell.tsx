import './Cell.css';

function Cell({cell}: any) {
  return (
    <span
      className="cell"
      data-x=""
      data-y=""
      data-ticket={cell.minCost.id}
    ></span>
  );
}

export default Cell;
