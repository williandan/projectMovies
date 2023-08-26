import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }

   html { font-size: 62.5%; }

   h1{
    color: white;
   }

   span{
    color: gray
   }

   p{
    color: gray
   }

   img{
    pointer-events:none
   }
`;
