 function handleSubmit(event) {
    event.preventDefault()

    let user_url = document.getElementById('user').value
   if (Client.URL_Validation(user_url)){

    console.log("Valid URL")

    fetch("http://localhost:5000/test",{
      method:"POST",
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },

      body:JSON.stringify({url:user_url})

    })
      
    .then(res =>  res.json())
    .then(function(res) {

      result(res);
      
    })

  } else{
    document.getElementById('irony').innerHTML=""
    document.getElementById('subjectivity').innerHTML=""
    document.getElementById('confidence').innerHTML=""
    document.getElementById('score_tag').innerHTML=""
    document.getElementById('agreement').innerHTML="" 
    console.log("URL IS NOT Vaild")              
    alert( " URL IS NOT Vaild ")
  }




    function result(res){
      document.getElementById('irony').innerHTML =`irony: ${res.irony}`;
      document.getElementById('subjectivity').innerHTML =`subjectivity: ${res.subjectivity}`;
      document.getElementById('confidence').innerHTML =`confidence:${res.confidence}`; 
      document.getElementById('score_tag').innerHTML =`score_tag: ${res.score_tag}`;
      document.getElementById('agreement').innerHTML =`agreement: ${res.agreement}`;
    }

   }
   export { handleSubmit };
