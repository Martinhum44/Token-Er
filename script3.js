var data = JSON.parse(localStorage.getItem('key'))
total = 0

for(i = 0; i < data.length; i++){
  total += Number(data[i].price)
}

document.getElementById("total").textContent = "Total order: $"+total

function submit(){
  pe = false
  if(!pe){
    try{
      var params = {
        subject:"Thanks for ordering Fruit Munchers ",
        to_name:document.getElementById("nm").value,
        message:`Thanks for choosing a healthier snack alternative! Your order will be in your hands in a few days. Be patient! Best regards, the Fruit Munchers team. TOTAL ORDER COST $${total} MXN`
      }

      emailjs.send("service_zwagt2d","template_9vql1nf",params).then(()=>alert("order successful!"))
      
    }
    catch(err){
      alert("Something went wrong :( More details: "+err)
    }
}}
