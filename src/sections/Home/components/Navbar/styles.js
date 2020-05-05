import styled, {css} from 'styled-components'

export const NavContainer = styled.div`
        z-index: 100000000000000000;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
     

        ${props => props.fixed && css`
        {
            background: white;
            height: 7%;
            position: fixed;
            -webkit-box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
            -moz-box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);
            box-shadow: -1px 10px 13px -7px rgba(0,0,0,0.24);

            animation: spawn .3s;

            animation-timing-function: ease-in-out;

            @keyframes spawn{
                from{
                    height: 10%;
                }

                to{
                    heigth: 7%;
                }
            }

        }
        `}
`
export const NavUl = styled.ul`
            width: 90%;
            display: flex;
            height: 40%;
            align-items: center;
            justify-content: flex-end;
            list-style: none;
            margin-top: 1%;
`

export const NavLi = styled.li`
        margin-right: 4%;

        &:first-of-type{
            margin-right: 28%;
        }

        &:last-of-type{
            margin-right: 25%;
        }
`

export const NavA = styled.a`
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
`
