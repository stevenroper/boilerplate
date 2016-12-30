/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'Libraries',
      description: 'Links to useful open source libraries'
    },
    {
      name: 'Apps',
      description: 'Links to new and exciting apps'
    },
    {
      name: 'News',
      description: 'Links to programming-related news articles'
    }
  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
