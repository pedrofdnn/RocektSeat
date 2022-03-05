import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
     --background: #f0f2f5;
     --red: #e52e4d;
     --green: #33CC95;
     --blue: #5429CC;

     --blue-light:#6933ff;

     --text-litle:#363f5f;
     --text-body:#969cb3;

     --background:#f0f2f5;
     --shape:#ffffff;
}

* {
     margin:0;
     padding:0;
     box-sizing:border-box;
}

//por padrão a fonte tem o tamanho de 16px nop Desktop, então e necessario deixar um tamanho padrão para outros tipos de dispotivos com a tela menor como notbook e outros.
html{
  @media(max-width:1080px) {
            // esse valor e calculado multiplicando 16 por qualquer valor para ter um resultado final que no caso ficaria assim, 16 x 0,09375 = 15px
        font-size: 93.75% ;
     }
   @media (max-width:720px) {
        font-size: 87,5% ; // 16x08705 = 14px
     }
       
}

body,input,textarea,button{
    font-family:'Popins',sans-serif ;
    font-weight:400 ;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600 ;
}

   
body {
     background: var(--background);
     -webkit-font-smoothing: antialiased;

     }

button {
cursor: pointer
}   

[disabled] {
    opacity:0.6;
    cursor:not-allowed;
}

`