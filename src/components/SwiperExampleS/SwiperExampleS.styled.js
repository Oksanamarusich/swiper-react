import { styled } from "styled-components";

export const StyledS = styled.div`
position:relative;

.swiper{
  margin-top:30px;
  margin-bottom: 60px;
}
.button-swiper{
    position:absolute;
    top:0;
    right:0;
    padding:20px;
    margin-right: 20px;
    width:100px;
    height:30px;
    /* border: 1px solid black; */
    display:flex;
    align-items:center;
    justify-content:space-between;
    
}
.swiper-button-next,
.swiper-button-prev{
 /* position:unset !important;
top:unset !important;
bottom:unset !important;
left:unset !important;
right:unset !important;
width:auto !important; */
background-color:white;
border: 1px solid #727273;
border-radius: 8px;
padding: 10px;
width: 44px;
height: 44px;
display:flex;
justify-content:center;
align-items:center;

}
.swiper-button-next:after, 
.swiper-button-prev:after{
    /* color:black;
    font-size:20px; */
    display:none;
   
}
`