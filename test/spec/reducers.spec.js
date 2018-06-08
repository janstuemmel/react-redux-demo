jest.mock('../../src/util/localStorage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
}))

import {
  userAuthRequest,
  userAuthSuccess,
  userAuthFailed
} from '../../src/actions'

import reducer from '../../src/reducers'

describe('reducer tests', () => {

  it('should have loading state true on user auth request', async () => {

    // given
    const action = userAuthRequest()

    // when
    const state = reducer(undefined, action)

    // then
    expect(state).toMatchObject({ loading: true })
  })


  it('should have state token on user auth success', () => {

    // given
    const action = userAuthSuccess('t0k3n')

    // when
    const state = reducer(undefined, action)

    // then
    expect(state).toMatchObject({ token: 't0k3n', loading: false })
  })


  it('should change loading state on user auth success', () => {

    // given
    let state = reducer(undefined, userAuthRequest())

    expect(state).toMatchObject({ loading: true })

    // when
    state = reducer(state, userAuthSuccess('t0k3n'))

    // then
    expect(state).toMatchObject({ loading: false })
  })


  it('should have state error on user auth failed', () => {

    // given
    const action = userAuthFailed(new Error('foo'))

    // when
    const state = reducer(undefined, action)

    // then
    expect(state).toMatchObject({ err: expect.any(Error), loading: false });
  })
})
