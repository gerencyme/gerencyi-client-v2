/**
 * @param data must be a array to be filtered be search input
 */

import { useTimeout } from '@shared/hooks/useTimeout'
import { TProductCard } from '@shared/types'
import { useState, useCallback, ChangeEvent, useMemo } from 'react'

export const useSearch = (data: TProductCard[]) => {
  const [isTyping, setIsTyping] = useState(false)
  const [search, setSearch] = useState('')

  const situation = isTyping
  const updateSituation = useCallback(() => {
    setIsTyping(false)
  }, [])

  useTimeout(situation, updateSituation, 1500)

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (!isTyping) {
      setIsTyping(true)
    }

    setSearch(value.toLowerCase())
  }

  const searchedData = useMemo(() => {
    return search.length > 0
      ? data.filter((item) =>
          item.product.productName.toLowerCase().match(new RegExp(search, 'i')),
        )
      : data
  }, [data, search])

  return { onchange, search, searchedData, isTyping }
}
