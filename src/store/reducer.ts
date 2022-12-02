import config from '../utils/config';

const initialState = {
  field: null,
  loading: true,
  minCost: null,
  maxCost: null,
  config: config,
  tickets: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'CALCULATED':
      return {
        ...state,
        field: action.field,
        loading: false,
        minCost: action.minCost,
        maxCost: action.maxCost,
        tickets: action.tickets,
      };
    default:
      return state;
  }
}
