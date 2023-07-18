import type {ReactInputProps} from './Input'
import { forwardRef, useImperativeHandle, useMemo } from 'react'

// prettier-ignore
export type ValidatableInput = {}

export const ValidatableInput = forwardRef<ValidatableInput, ReactInputProps>(
    (props, ref) => {
    const {className: _className, ...inputProps} = props
    const className = ['input', _className].join(' ')
    return <input {...inputProps} className={className} />
})