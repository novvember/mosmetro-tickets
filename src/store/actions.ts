function calculated(field: any, minCost: number, maxCost: number) {
  return {
    type: 'CALCULATED',
    field,
    minCost,
    maxCost,
  };
}

export { calculated };
