import styled from 'styled-components'

const FormStyled = styled.div`
    padding: 20px;
    

    input{
        padding: 10px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 400px;
    }

    button{
        padding: 10px 20px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
        background-color: lightblue;
        transition: background-color 200ms linear;
        &:hover{
            background-color: #75bcd3;
        }
    }
`

export default FormStyled