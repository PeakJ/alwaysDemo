let xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

xhr.onreadystatechange = function(){
    if (xhr.readyState===4 && xhr.status ===200){
        console.log(xhr.responseText); 
    }else{
        console.log(xhr.readyState);
        
    }
}
const url = 'http://test.domain.com';
// xhr.open('GET',url,true);
// xhr.send();