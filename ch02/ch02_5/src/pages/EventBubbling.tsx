import { SyntheticEvent } from "react"

export default function EvnetBubbling() {
    const onDivClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles, currentTarget} = e
        console.log('click event bubbles on <div>', isTrusted, target, bubbles, currentTarget)
    }

    const onButtonClick = (e: SyntheticEvent) => {
        const {isTrusted, target, bubbles, currentTarget} = e
        console.log('click event bubbles on <button>', isTrusted, target, bubbles, currentTarget)
    }

    return (
        <div onClick={onDivClick}>
            <p >EvnetBubbling</p>
            <button onClick={onButtonClick}>Click Me</button>
        </div>
    )
}