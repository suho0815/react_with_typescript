import type * as T from './types'

export const setListidCardids = (payload: T.ListidCardidS): T.SetListidCardids => ({
  type: "@listidCardids/set",
  payload
})

export const removeListid = (payload: string): T.RemoveListCardids => ({
  type: '@listidCardids/remove',
  payload
})

export const prependCardidToListid = (payload: T.ListidCardid): T.PrependCardidToListidAction => ({
  type: '@listidCardids/prependCardid',
  payload
})

export const appendCardidToListid = (payload: T.ListidCardid): T.AppendCardidToListidAction => ({
  type: '@listidCardids/appendCardid',
  payload
})

export const removeCardidToListid = (
  payload: T.ListidCardid
): T.RemoveCardidToListidAction => ({
  type: '@listidCardids/removeCardid',
  payload
})