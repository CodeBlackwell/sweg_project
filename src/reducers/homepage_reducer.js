import { Map } from 'immutable'
import { FETCH_PROFILE } from '../constants/homepage_constants'

const initialState = Map({
    greeting: 'Hello Tucker Connelly! Good to meet you',
    profile: {
        name: null,
        number: null,
        hometown: null,
        favoriteFancyQuote: null,
        strongestTechnicalAttributes: null
    }
});

const actionHandlers = {
    [FETCH_PROFILE] (state = initialState, action) {
        const {
            payload: {
                greeting,
                profile
            }
        }  = action;

        return state.merge({
            greeting,
            profile
        });
    }
};


// Setting up the reducer this way is an optimization for constant time lookup on action handlers
const homepageReducer = function (state, action) {
    if (actionHandlers[action.type] != null) {
        return actionHandlers[action.type](state, action)
    }
    return state
};

export default homepageReducer
