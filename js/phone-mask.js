document.querySelector('#phone').onkeydown = function(e){
    inputphone(e,document.querySelector('#phone'))
    }

    
    //Функция маски формат +7 (
    function inputphone(e, phone){
    function stop(evt) {
        evt.preventDefault();
    }
    let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)
    
    if(not == 1 || 'Backspace' === not){
    if('Backspace' != not){ 
        if(v.length < 3 || v ===''){phone.value= '+7 ('}
        if(v.length === 7){phone.value= v +') '}
        if(v.length === 12){phone.value= v +'-'}
         if(v.length === 15){phone.value= v +'-'}
        }
    }else{stop(e)}  }

