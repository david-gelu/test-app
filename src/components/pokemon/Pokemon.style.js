import styled from 'styled-components';


export const Img = styled.div` 
  margin: 20px auto;
  border-radius:40px;
  box-shadow:0px 0px 5px 2px var(--color1);
`

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  width:100%;
  background: rgba(247, 246, 241,.8);
  @media(max-width: 900px){
    flex-direction: column; 
  }
  @media(max-width: 767px){
    flex-direction: column; 
  }
`
export const ContainerType = styled.div`
  position:relative;
  box-shadow:0px 0px 5px var(--color1);
  width:50%;
  margin:.7rem .3rem;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  @media(max-width: 900px){
    width: 97% ;
    margin: 1rem auto ;
    box-shadow:0px 0px 5px var(--color1);
  }
  @media(max-width: 767px){
      width: 97%;
      padding: 1rem;
      margin: 1rem auto ;
      box-shadow:0px 0px 5px var(--color1);
  }
`

export const Type = styled.div`
  margin:.7rem 0 .7rem .5rem;
  padding:.5rem 1rem;
  background: var(--color2);
  color: var(--color3);
  border-radius:5px;
}
`
export const Span = styled.span`
  color: var(--color3);
  background:var(--color1);
  padding: .55rem 1rem;
  border-radius:5px;
  margin-right:-1rem;
  margin-left:2rem;
`
export const ContainerSpecial = styled.div`
  position:relative;
  box-shadow:0px 0px 5px var(--color1);
  width:50%;
  margin:.7rem .3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  @media(max-width: 900px){
    width: 97% ;
    margin: 1rem auto ;
    box-shadow:0px 0px 5px var(--color1);
  }
  @media(max-width: 767px){
    .container-special{
      width: 97%;
      padding: 1rem;
      margin: 1rem auto ;
      box-shadow:0px 0px 5px var(--color1);
    }
  }
`
export const Special = styled.div`
  margin:.7rem 0 .7rem .5rem;
  padding:.5rem 1rem;
  background: var(--color2);
  color: var(--color3);
  border-radius:5px;  
  }
`