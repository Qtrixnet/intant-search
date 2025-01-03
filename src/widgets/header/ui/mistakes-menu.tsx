'use client'

import { useUnit } from 'effector-react'
import { usePathname } from 'next/navigation'
import { ReactElement, useMemo } from 'react'

import { Menu } from '@widgets/header/ui/menu'

import { SharedLocales } from '@shared/locales/shared'
import {
  $duplicatesList,
  $obsoletesWithoutReplacementList,
  $relevantsWithReplacementList,
  $selfReplacementList,
  $unverifiedReplacementsList
} from '@shared/model'
import { RouterPaths } from '@shared/router/router-paths'

export const MistakesMenu = (): ReactElement => {
  const duplicatesList = useUnit($duplicatesList)
  const unverifiedReplacementsList = useUnit($unverifiedReplacementsList)
  const obsoletesWithoutReplacementList = useUnit(
    $obsoletesWithoutReplacementList
  )
  const relevantsWithReplacementList = useUnit($relevantsWithReplacementList)
  const selfReplacementList = useUnit($selfReplacementList)

  const pathname = usePathname()

  const equipmentLinks = useMemo(
    () => [
      {
        isActive: pathname === RouterPaths.DUPLICATES,
        href: RouterPaths.DUPLICATES,
        text: SharedLocales.Duplicates,
        count: duplicatesList.length
      },
      {
        isActive: pathname === RouterPaths.UNVERIFIED_REPLACEMENTS,
        href: RouterPaths.UNVERIFIED_REPLACEMENTS,
        text: SharedLocales.UnverifiedReplacements,
        count: unverifiedReplacementsList.length
      },
      {
        isActive: pathname === RouterPaths.OBSOLETES_WITHOUT_REPLACEMENT,
        href: RouterPaths.OBSOLETES_WITHOUT_REPLACEMENT,
        text: SharedLocales.ObsoletesWithoutReplacement,
        count: obsoletesWithoutReplacementList.length
      },
      {
        isActive: pathname === RouterPaths.RELEVANTS_WITH_REPLACEMENT,
        href: RouterPaths.RELEVANTS_WITH_REPLACEMENT,
        text: SharedLocales.RelevantsWithReplacement,
        count: relevantsWithReplacementList.length
      },
      {
        isActive: pathname === RouterPaths.SELF_REPLACEMENT,
        href: RouterPaths.SELF_REPLACEMENT,
        text: SharedLocales.SelfReplacement,
        count: selfReplacementList.length
      }
    ],
    [
      pathname,
      duplicatesList,
      unverifiedReplacementsList,
      obsoletesWithoutReplacementList,
      selfReplacementList,
      relevantsWithReplacementList
    ]
  )

  const totalProblemsCount = useMemo(
    () => equipmentLinks.reduce((acc, cur) => acc + cur.count, 0),
    [equipmentLinks]
  )

  return (
    <Menu
      problemsCount={totalProblemsCount}
      equipmentLinks={equipmentLinks}
      withProblemsTitle={SharedLocales.WithMistakes}
      withoutProblemsTitle={SharedLocales.WithoutMistakes}
    />
  )
}
