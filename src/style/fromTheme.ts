import { ThemeProps } from 'styled-components'
import { Theme } from './theme'

/**
 * a utility function to easily get values from theme while keeping strong typing
 * 
 * Instead of writing the following NON-typed code:
 * props => props.theme.colors.main
 * 
 * we can write this and keep our code TYPE-SAFE: 
 * fromTheme(t => t.colors.main)
 * 
 */

type Accessor = (t: Theme) => string

const fromTheme =
    (accessor: Accessor) =>
        (props: ThemeProps<Theme>) =>
            accessor(props.theme)

export default fromTheme