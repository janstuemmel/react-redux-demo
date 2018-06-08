jest.mock('../../src/util/localStorage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
}))

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { authenticate } from '../../src/actions'

const mockStore = configureStore([ thunk ])

describe('actions tests', () => {

  it('should call user auth success actions', async () => {

    // given
    const store = mockStore()

    // when
    await store.dispatch(authenticate('foo', 'bar'))

    // then
    expect(store.getActions()).toEqual([
      { type: 'USER_AUTH_REQUEST' },
      { type: 'USER_AUTH_SUCCESS', token: expect.any(String) },
    ])
  })


  it('should call user auth failed actions', async () => {

    // given
    const store = mockStore();

    // when
    await store.dispatch(authenticate('nice', 'try'))

    // then
    expect(store.getActions()).toEqual([
      { type: 'USER_AUTH_REQUEST' },
      { type: 'USER_AUTH_FAILED', err: expect.any(Error) },
    ])
  })
})
