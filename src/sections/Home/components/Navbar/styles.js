import styled, {css} from 'styled-components'

export const NavContainer = styled.div`
        z-index: 100000000000000000;
        display: flex;
        justify-content: center;
        position: fixed;
        flex-direction: column;
        top: 0;
        left: 0;
        right: 0;
        background: white;
        -webkit-box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
        -moz-box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
        box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);

        @media only screen and (min-width: 768px) {
            display: flex;
        }
`
export const NavUl = styled.ul`

            width: 100%;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            list-style: none;
            margin: 0;
            padding: 0;
            animation: showMenu 1s ease-out;

            ${props => props.isMenuVisible && css`
            {
                display: flex;
            }
            `}


        @keyframes showMenu{
            from{
                opacity: 0;
                display: none;
            }

            to{
                opacity: 1;
                display: flex;
            }
        }

`

export const NavLi = styled.li`
`

export const NavA = styled.a`

        color: black;

        &:hover{
            text-decoration: none;
            color: #FF703F;
        }

        ${props => props.fixed && css`
        {
            color: black;
            &:hover{
            text-decoration: none;
            color: black;
            }

            animation: spawnLinks .4s;

            animation-timing-function: ease-in-out;

            @keyframes spawnLinks{

            from{
                color: white;
            }

            to{
                color: black;
            }
            }

        }
        `}
`
export const MainUl = styled.ul`
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    height: 10%;
`
