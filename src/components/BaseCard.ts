import styled from "styled-components";
import fromTheme from "../style/fromTheme";

const BaseCard = styled.div`
    border-radius: 4px;
    box-shadow: 0px 0px 0px 2px ${fromTheme(t => t.colors.main)};
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export default BaseCard