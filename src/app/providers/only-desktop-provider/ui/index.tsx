import { ReactElement, ReactNode } from 'react'
import { Notification } from '@/shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const OnlyDesktopProvider = ({ children }: Props): ReactElement => {
  return (
    <>
      <div className="sm:hidden flex-grow flex flex-col items-center justify-center">
        <Notification
          size={'M'}
          title={'Кажется, наш сайт не дружит с маленькими экранами'}
          description={'Но на большом экране всё супер — приходите!'}
          image={'/desktop.svg'}
          button={null}
        />
      </div>
      <div className="hidden sm:flex flex-grow flex-col">{children}</div>
    </>
  )
}
