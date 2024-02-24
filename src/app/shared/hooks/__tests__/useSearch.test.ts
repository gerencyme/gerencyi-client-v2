import { useSearch } from '@shared/hooks/useSearch'
import { productMock } from '@shared/mocks'
import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

describe('useSearches', () => {
  it('should find a product by name', async () => {
    const { result } = renderHook(() => useSearch(productMock))

    act(() => {
      const event = {
        target: { value: '01' },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.onchange(event)
    })

    await waitFor(() => {
      expect(result.current.searchedData[0].product.productName).toEqual(
        'Product name 01',
      )
    })
  })

  it('should able to return a empty array and not broken the system', async () => {
    const { result } = renderHook(() => useSearch(productMock))

    act(() => {
      const event = {
        target: { value: '02' },
      } as React.ChangeEvent<HTMLInputElement>
      result.current.onchange(event)
    })

    await waitFor(() => {
      expect(result.current.searchedData).toEqual([])
    })
  })
})
