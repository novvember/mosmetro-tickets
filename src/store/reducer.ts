const initialState = {
  field: null,
  loading: true,
  minCost: null,
  maxCost: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'CALCULATED':
      return {
        field: action.field,
        loading: false,
        minCost: action.minCost,
        maxCost: action.maxCost,
      };
    default:
      return state;
  }
}
