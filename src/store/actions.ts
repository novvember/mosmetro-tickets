function calculated(field: any, minCost: number, maxCost: number, tickets: any) {
  return {
    type: 'CALCULATED',
    field,
    minCost,
    maxCost,
    tickets,
  };
}

export { calculated };
