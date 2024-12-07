'use client'

import { ReactElement } from 'react'
import { Notification } from '@/shared/ui/notification'
import { useRouter } from 'next/navigation'
import { ROUTER_PATHS } from '@/shared/settings/router-paths'

const NotFound = (): ReactElement => {
  const router = useRouter()

  return (
    <Notification
      size={'M'}
      title={'Такой страницы не существует...'}
      description={
        'Кажется, вы нашли секретное место! К сожалению, здесь ничего нет...'
      }
      image={'/404.svg'}
      button={{
        text: 'Вернуться домой',
        handler: () => router.push(ROUTER_PATHS.search)
      }}
    />
  )
}

export default NotFound
