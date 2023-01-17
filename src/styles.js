import styled from 'styled-components'

import { FaTrash, FaSketch } from "react-icons/fa";

export const Container = styled.div`
background: linear-gradient(90deg, #374141 0%, #6a5acd 81.75%);
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`

export const ToDoList = styled.div`
background: white;
padding: 30px 20px;
border-radius: 5px;

ul{ padding: 0 ;
margin-top:60px}


`

export const Input  = styled.input`
border: 2px solid rgba(209,211,212,0.1);
border-radius: 5px;
height: 40px;
margin-right: 40px;
width: 340px;
`

export const Button  = styled.button`
background:#8052ec;
border-radius: 5px;
border: none;
font-size:17px ;
font-weight: 900;
line-height: 2px;
height: 40px;
color: white;
width:130px;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}


`

export const ListItem = styled.div`
background:${ props => props.isFinished? '#e8ff8b':'#e4e4e4'};
box-shadow: 1px 4px 10pc rgba(0,0,0,0.2);
border-radius: 5px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
padding: 0 10px;
width: 500px;

li{ list-style:none};




`

export const Trash = styled( FaTrash)`

cursor: pointer;

`


export const Diamond = styled( FaSketch )`

cursor: pointer;

`