import axios from 'axios';

axios.get('http://127.0.0.1:9000/bela')
.then (response => {
  document.body.appendChild(component(response.data.name));
  console.log(response.data);
}, error => {console.log(error);
})

function component(name) {
    const element = document.createElement('div');
    element.innerHTML = name;
  
    
  
    return element;
  }
  