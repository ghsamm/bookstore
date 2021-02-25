import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import useRequest from './useRequest'

it('should have the right inital state', async () => {

    const promise = Promise.resolve()

    const requestFn = () => promise

    const { result } =
        renderHook(
            () => useRequest(requestFn)
        )

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe(null)
    expect(result.current.isLoading).toBe(true)

    await act(() => promise)
})

it('should call requestFn', async () => {

    const requestFn = jest.fn().mockResolvedValue('data')

    const { waitForNextUpdate } = renderHook(
        // @ts-ignore
        () => useRequest(requestFn)
    )

    expect(requestFn).toHaveBeenCalled()
    // to remove this error: 
    // Warning: An update to TestComponent inside a test was not wrapped in act(...).
    await waitForNextUpdate()
})
it('should update data when received from requestFn', async () => {

    const requestFn = () => new Promise(resolve => {
        setTimeout(() => resolve('my-data'), 500)
    })

    const { result, waitForNextUpdate } =
        renderHook(
            () => useRequest(requestFn)
        )


    await waitForNextUpdate({ timeout: 1000 })

    expect(result.current.data).toEqual('my-data')

})

it('should set error to true when requestFn throws', async () => {

    const requestFn = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('error-msg')), 500)
    })

    const { result, waitForNextUpdate } =
        renderHook(
            () => useRequest(requestFn)
        )


    await waitForNextUpdate({ timeout: 1000 })

    expect(result.current.error).toBeDefined()
    expect(result.current.error!.message).toEqual('error-msg')

})

it('should allow refetching data', async () => {

    const requestFn = jest.fn().mockResolvedValue('data')

    const { result, waitForNextUpdate } =
        renderHook(
            () => useRequest(requestFn)
        )

    act(() => result.current.refetch())

    await waitForNextUpdate({ timeout: 1000 })

    expect(requestFn).toBeCalledTimes(2)

})