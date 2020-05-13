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

        @media only screen and (min-width: 992px){
            background: none;
            position: absolute;
            box-shadow: none;

            ${props => props.fixed && css`
            {
            background: white;
            position: fixed;
            -webkit-box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
            -moz-box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
            box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
            animation: spawn .3s;
            animation-timing-function: ease-in-out;
            @keyframes spawn{
                from{
                    opacity: 0;
                }
                to{
                    opacity: 1;
                }
            }
        }
        `}

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

        @media only screen and (min-width: 992px){
            width: 50%;
            display: flex;
            height: 40%;
            justify-content: flex-end;
            flex-direction: row;
            margin-left:20%;
        }

`

export const NavLi = styled.li`
    @media only screen and (min-width: 992px){
        margin-right: 4%;

        &:first-of-type{
            margin-left: 15%;
        }
        &:last-of-type{
            margin-right: 25%;
        }
    }
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

        @media only screen and (min-width: 992px){
            color: white;
            &:first-of-type{
            margin-right: 25%;
        }
        &:hover{
            text-decoration: none;
            color: white;
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
        }


`
export const MainUl = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    height: 10%;

    @media only screen and (min-width: 992px){
        flex-wrap: no-wrap;
    }
`
