import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;  
}  

html {       
  box-sizing: border-box;
  font-size: 62.5%;
}
  
body {  
    font-size : ${(props) => props.theme.font.mainSize};
    font-family : ${(props) => props.theme.font.main};   
    font-weight: ${(props) => props.theme.font.regularWeight}; 
    background-color :${(props) => props.theme.colors.bg}; ,

  
              
    a{
      text-decoration: none;
      list-style: none;
    } 

    button{
      background:none;
      border:none;
    }


  }    

  @media (max-width: 1024px) {
  html {
    font-size: 90%;
  }

  body {
    cursor: none;
  }
}  

@media (max-width: 700px) {
  html {
    font-size: 50%;
  }

  body {
    cursor: none !important;
  }
} 
`;
