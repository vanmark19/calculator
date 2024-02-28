const btns = document.querySelectorAll('.operations div');
const delBtns = document.querySelectorAll('.delete-buttons div');
const operations = 'div times substract add equal backspace clear point';
const specificOperations = 'div times substract add';
const pointBtn = document.querySelectorAll('#point, .point');
const bigText = document.querySelector('.big');
const smallText = document.querySelector('.small');
const equalBtn = document.querySelectorAll('#equal, .inner-equal');
let point = false;
let isEqualClicked = false;
let reset = false;

pointBtn.forEach(div => {

  div.addEventListener('click', e => {
    e.stopPropagation();
    if (isEqualClicked)
      isEqualClicked = false;
    

    if (reset){
      smallText.textContent = bigText.textContent;
      reset = false;
     
    }

    if (!point){
      if (smallText.textContent === '' || bigText.textContent === '0')
        smallText.textContent += '0';
      bigText.textContent += '.';
      smallText.textContent += '.';
      point = true;
    } 
  });
});


btns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    let id;
    if (btn.id)
      id = btn.id;
    else
      id = btn.parentElement.id;
    
    if (isEqualClicked)
      isEqualClicked = false;

    

    if(!operations.includes(id)){
      if (bigText.textContent === '0')
        bigText.textContent = id;
      else if(reset){
        bigText.textContent = '0';
        smallText.textContent = '';
        reset = false;
        isEqualClicked = false;
      }
      else 
        bigText.textContent += id;
      smallText.textContent += id;


    } else if (specificOperations.includes(id)){
        point = false;
      
      if (reset){

        smallText.textContent = bigText.textContent;
        reset = false;
       
      }
      bigText.textContent = '0';
      smallText.textContent += ` ${e.target.textContent} `;
    }

    
  });
});



delBtns.forEach(btn => {
  
  
  btn.addEventListener('click', e => {

    e.stopPropagation();
    let id;
    if (btn.id)
      id = btn.id;
    else
      id = btn.parentElement.id;
    
  
    if (id === 'backspace'){
      if (bigText.textContent !== '0'){
        if (bigText.textContent[bigText.textContent.length - 1] === '.')
          point = false;
        smallText.textContent = smallText.textContent.slice(0, -1);
        bigText.textContent = bigText.textContent.slice(0, -1);
        if(bigText.textContent === '')
          bigText.textContent = '0';
        
    }
  } else if (bigText.textContent !== '0')
      bigText.textContent = '0';
    else
      smallText.textContent = '';
    

  });
});

equalBtn.forEach(div => {
  div.addEventListener('click', e => {
    if (!isEqualClicked){
      let ans = smallText.textContent;
      ans = ans.replaceAll('÷', '/');
      ans = ans.replaceAll('x', '*');
      ans = ans.split(' ');
      console.log(ans);
      
      
      
      reset = true;
      if (ans.length >= 12)
        bigText.textContent = ans.slice(0, 11);
      else
        bigText.textContent = ans;
      isEqualClicked = true;
    } else if (isEqualClicked || smallText.textContent === ''){
      bigText.textContent = '0';
      smallText.textContent = '';
      isEqualClicked = false;
    }
    
  });
});



