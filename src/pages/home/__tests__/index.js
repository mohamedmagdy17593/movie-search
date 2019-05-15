import api from '../../../api'

jest.mock('../../../api', () => ({
  search: jest.fn(({movieName}) =>
    Promise.resolve({value: {results: movieName ? [{}, {}] : undefined}}),
  ),
}))

test('TODO', () => {
  expect(true).toBe(true)
})
