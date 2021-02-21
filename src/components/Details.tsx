import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import fromTheme from '../style/fromTheme'

const S = {
    Detail: styled.div`
        display: flex;
        justify-content: space-between;
        border-bottom: 2px dashed ${fromTheme(t => t.colors.secondary)};
    `,
    Label: styled.div`
        color: ${fromTheme(t => t.colors.label)}
    `
}

interface Props {
    label: string
    content: string
}

const Detail: FunctionComponent<Props> = ({ label, content }) => {
    return <S.Detail>
        <S.Label>{label}</S.Label>
        <div>{content}</div>
    </S.Detail>
}

export default Detail