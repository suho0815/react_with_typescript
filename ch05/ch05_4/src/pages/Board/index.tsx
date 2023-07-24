import { useMemo } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { Title } from "../../components"
import CreateListForm from "./CreateListForm"
import BoardList from "../BoardList"
import { ListDroppable } from "../../components"

import { useLists } from "../../store/useList"

export default function Board() {
  const {lists, onRemoveList, onCreateList, onMoveList, onDragEnd} = useLists()

  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList key={list.uuid} list={list}
         onRemoveList={onRemoveList(list.uuid)}
         onMoveList={onMoveList} index={index}/>
      )),
      [lists, onRemoveList, onMoveList]
  )

  return (
    <section className="mt-4">
      <Title>Borad</Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListDroppable className="flex flex-row p-2 mt-4">
          <div className="flex flex-wrap p-2 mt-4">
            {children}
            <CreateListForm onCreateList={onCreateList} />
          </div>
        </ListDroppable>
      </DragDropContext>
    </section>
  )
}
