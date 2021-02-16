import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import fromTheme from '../style/fromTheme'

interface Props {
    message: string
}

// following this naming convention which I liked: https://medium.com/inturn-eng/naming-styled-components-d7097950a245
const S = {
    ErrorMessage: styled.div`
        border: 1px solid ${fromTheme(t => t.colors.error)};
        margin: 10px;
        padding: 10px;
        color: ${fromTheme(t => t.colors.error)};
    `
}

const ErrorMessage: FunctionComponent<Props> = ({ message }) => {
    return <S.ErrorMessage>{message}</S.ErrorMessage>
}

export default ErrorMessage