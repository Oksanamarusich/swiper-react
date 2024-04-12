import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  
  margin: 0 auto;
  min-width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight:400;
  
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
  list-style: none;
  padding: 0;
}
button{
  border:transparent;
  cursor:pointer;
}
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  border: var(--borderModal);
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
}
.modal-overlay {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
}

`;


