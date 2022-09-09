let result = document.getElementById("result");
    let startbtn = document.getElementById("startbtn");
    let stopbtn = document.getElementById("stopbtn");
    let hor = [0];
    let obj = [0];
    result.innerHTML = hor[0] + ":" + obj[0];
    function ob() {
      result.innerHTML = " ";
      obj[0] += 1;
      result.innerHTML += hor +":"+ obj;
      
      if(obj[0] == 60){
obj[0] = 0, hor[0] += 1
      }
    }

    function startit() {
      start = setInterval(ob, 1000);
        startbtn.style.display="none" , stopbtn.style.display ="block"
      
    }
    function stopit() {
      clearInterval(start);
      startbtn.style.display="block" , stopbtn.style.display ="none"
    }
    
    function resetit(){
      clearInterval(start);
      obj = [0];
      hor = [0];
      result.innerHTML = hor[0] + ":" + obj[0];
      startbtn.style.display="block" , stopbtn.style.display ="none"
    }
