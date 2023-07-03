import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()},{D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} alt="" />
      <img src={D.randomImage()} alt="" />
    </div>
  )
}