'use client'

import { ReactElement } from 'react'
import { useUnit } from 'effector-react'
import { $foundModels, $searchQuery } from '@/_pages/search/model'
import { Notification } from '@/shared/ui/notification'
import { FoundEquipmentBadge } from '@/_pages/search/ui/found-equipment-badge'

export const SearchResultsStepper = (): ReactElement | null => {
  const searchQuery = useUnit($searchQuery)
  const foundModels = useUnit($foundModels)

  const isSearchStarted = Boolean(searchQuery)
  const isSomeResults = foundModels.length > 10
  const isEmptyResults = foundModels.length <= 0

  if (!isSearchStarted) {
    return (
      <Notification
        title={`Начните вводить запрос`}
        description={'Мы сделаем всю магию 🪄'}
        image={'/try-to-search.svg'}
        button={null}
        size={'S'}
      />
    )
  } else if (isSearchStarted && isSomeResults) {
    return (
      <Notification
        title={`У нас тут больше ${foundModels.length} вариантов`}
        description={'Попробуйте уточнить запрос'}
        image={'/some-results.svg'}
        button={null}
        size={'S'}
      />
    )
  } else if (isSearchStarted && isEmptyResults) {
    return (
      <Notification
        size={'S'}
        title={'Этой модели нет в базе'}
        description={'Свяжитесь с отделом СВН и мы обязательно её добавим'}
        image="/empty-search.svg"
        button={null}
      />
    )
  } else {
    return (
      <div
        className={
          'p-4 rounded-md flex items-center justify-center gap-2 flex-wrap'
        }
      >
        {foundModels.map(({ model, relevance }) => {
          return (
            <FoundEquipmentBadge key={model} relevance={relevance}>
              {model}
            </FoundEquipmentBadge>
          )
        })}
      </div>
    )
  }
}
