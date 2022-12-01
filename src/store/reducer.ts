const initialState = {
  field: null,
  loading: true,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'CALCULATED':
      return {
        field: action.field,
        loading: false,
      };
    default:
      return state;
  }
}
