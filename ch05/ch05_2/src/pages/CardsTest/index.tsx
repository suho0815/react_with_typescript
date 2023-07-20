import {useCallback, useMemo, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Icon} from '../../theme/daisyui'
import * as D from '../../data'
import type {AppState} from '../../store'
import * as C from '../../store/cards'
import {Title} from '../../components'
import Card from './Card'

const makeCard = () =>
  D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 100), '', '', '', '')

export default function CardsTest() {
  const dispatch = useDispatch()
  const cards = useSelector<AppState, C.State>(({cards}) => cards)
  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch])
  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    [dispatch]
  )
  const children = useMemo(
    () =>
      cards.map(card => {
        if (cards === undefined) {
          // 데이터 로딩이 완료되지 않았을 때 표시할 내용 또는 로딩 상태 표시
          return <div>Loading...</div>
        } else{
          <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
        }
      }
      ),
    [cards, removeCard]
  )
  useEffect(addCard, [addCard])

  return (
    <section className="mt-4">
      <Title>CardsTest</Title>
      <div className="flex justify-center mt-4">
        <Icon name="add" className="btn-primary" onClick={addCard} />
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}
