import { auth } from '@features/AuthCard/services'
import { api } from '@shared/services/axios/api'
import { TUserResponse, TAuthRequest } from '@shared/types'

jest.mock('@shared/services/axios/api', () => ({
  api: {
    post: jest.fn(() => ({
      data: {} as TUserResponse,
    })),
  },
}))

let mockApi: {
  post: jest.MockedFunction<typeof api.post>
  data: jest.MockedObject<TUserResponse>
}

beforeEach(() => {
  mockApi = {
    post: jest.fn(),
    data: {} as TUserResponse,
  }
})

jest.mock('@features/AuthCard/services', () => ({
  auth: jest.fn(() => ({
    data: mockApi.data,
  })),
}))

describe('AuthServices', () => {
  const body: TAuthRequest = {
    CNPJ: '00.000.000/0000.00',
    password: 'password',
  }

  it('should be able to authenticate a user', async () => {
    await auth(body)

    expect(auth).toHaveBeenCalledWith(body)
  })
})
