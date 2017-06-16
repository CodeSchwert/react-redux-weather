import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // always make sure to return a new piece of state from reducers
      // NEVER MUTATE THE STATE directly, (like) this.state = { bla: 'bla' }
      return [ action.payload.data, ...state ];
  }
  return state;
}
