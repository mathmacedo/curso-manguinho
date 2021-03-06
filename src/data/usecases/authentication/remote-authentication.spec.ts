import { faker } from '@faker-js/faker'
import HttpPostClientSpy from '../../test/mock-http-client'

import RemoteAuthentication from './remote-authentication'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    httpPostClientSpy,
    sut,
  }
}

describe('Remote Authentication', () => {
  test('Should call HttpPostClient with corrent URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)

    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
