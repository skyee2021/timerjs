document.addEventListener('DOMContentLoaded', function() {
  let timer, cnt = 0;
  document.querySelector('button').addEventListener('click', function(){
    
    if(timer && document.querySelector('#running').style.display === 'block'){
      clearInterval(timer)
      timer = null;

      document.querySelector('button').textContent = 'Start';
      document.querySelector('#running').style.display = 'none';
      
    }else{
      timer =setInterval(function() {
        cnt += 1;
        document.querySelector('#seconds').textContent = (Math.floor(cnt/10));

        document.querySelector('.dots').prepend(document.querySelector('.dots > div:last-child'))

        ///////
        document.querySelector('#running').style.display = 'block';
        document.querySelector('button').textContent = 'Stop';
      }, 100)
    }
    
    
    
  })

})
