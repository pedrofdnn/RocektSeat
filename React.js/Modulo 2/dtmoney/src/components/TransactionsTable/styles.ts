import styled from "styled-components";

export const Container = styled.div`
 margin-top: 4rem ; // para aumentar somente a margin de cima
 
    
 table { 
    width: 100% ; //para pegar toda largura
    border-spacing: 0 0.5rem ; // para dar espaçamentos

    th {
      color:var(--text-body) ; 
      font-weight: 400 ;      
      padding: 1rem 2rem ;      
      text-align: left ;
      line-height: 1.5rem ;   
   }   
       
   td {
      padding: 1rem 2rem;
      border: 0;   
      background: var(--shape);       
      color: var(--text-body) ;       
      border-radius: 0.1rem ;

      &:first-child{
         color: var(--text-title)        
      }

      &.deposit{         
         color: var(--green);        
      }

      &.withdraw{
         color: var(--red);         
      }     
   }
}

`;