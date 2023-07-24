import type { FC, PropsWithChildren } from "react";
import { Draggable } from "react-beautiful-dnd";

export type CardDraggableProps = {
  draggableId: string,
  index: number
}

export const CardDraggable: FC<PropsWithChildren<CardDraggableProps>> = ({
  draggableId,
  index,
  children
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {provider => {
        return (
          <div ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}>
            {children}
          </div>
        )
      }}
    </Draggable>
  )
}