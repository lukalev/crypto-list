import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import * as actions from './index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Test thunk action creator', () => {
  it('fetchPost should run succesfully', () => {
    const store = mockStore({})
    const expectedActions = [ 
        'TOGGLE_ARTICLE', 
        'REQUEST_POST', 
        'RECEIVE_POST',
        'TOGGLE_ARTICLE'
    ]
 fetchMock.get('*', { response: 200 })
    return store.dispatch(actions.fetchPost('EUR',1))
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)
        expect(actualActions).toEqual(expectedActions)
     })

    fetchMock.restore()
  })
  
})