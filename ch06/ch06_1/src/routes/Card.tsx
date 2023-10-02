import type {AppState} from '../store'
import type {Card as CardType} from '../store/commonTypes'
import * as CE from '../store/cardEntities'

import {useState, useCallback, useEffect} from 'react'
import {useNavigate, useParams, useSearchParams, useLocation} from 'react-router-dom'
import {UseSelector} from 'react-redux/es/hooks/useSelector'

import {Div, Avatar} from '../components'
import {useSelector} from 'react-redux'

export default function Card() {
  const location = useLocation()
  const params = useParams()
  const [search] = useSearchParams()
  const navigate = useNavigate()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const [card, setCard] = useState<CardType | null>(null)
  const {cardid} = params
  const cardEntities = useSelector<AppState, CE.State>(({cardEntities}) => cardEntities)

  useEffect(() => {
    if (!cardEntities || !cardid) return

    cardEntities[cardid] && setCard(notUsed => cardEntities[cardid])
  }, [cardEntities, cardid])

  if (!card)
    return (
      <div>
        <p>location: {JSON.stringify(location, null, 2)}</p>
        <p>params: {JSON.stringify(params, null, 2)}</p>
        <p>cardid: {params['cardid']}</p>
        <p>
          from: {search.get('from')}, to: {search.get('to')}
        </p>
        <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
          goBack
        </button>
      </div>
    )

  return (
    <div className="p-4">
      <Div src={card.image} className="w-full" minHeight="10rem" height="10rem" />
      <Div className="flex flex-row items-center mt-4">
        <Avatar src={card.writer.avatar} size="2rem" />
        <Div className="ml-2">
          <p className="text-xs font-bold">{card.writer.name}</p>
          <p className="text-xs text-gray-500">{card.writer.jobTitle}</p>
        </Div>
      </Div>
      <button className="mt-4 btn btn-primary btn-xs" onClick={goBack}>
        goBack
      </button>
    </div>
  )
}
