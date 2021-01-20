function resultcalculate()
           {
            console.log("entered func");
            const gender = document.getElementById("gender").value
            const weight = document.getElementById("weight").value
            const height = document.getElementById("height").value
            const neck = document.getElementById("neck").value
            const waist = document.getElementById("waist").value
            const hip = document.getElementById("hip").value 
            if(gender == "male")
            {
                fatpercentage.innerHTML=(495/(1.0324-0.19077*(Math.log10(waist-neck))+(0.15456*Math.log10(height)))-450).toFixed(2);
                let BF=(495/(1.0324-0.19077*(Math.log10(waist-neck))+(0.15456*Math.log10(height)))-450).toFixed(2);
                if(BF>=2&&BF<=5){fitness.innerHTML="you do not have essential fat required for a healthy lifestyle" ;}
                else if(BF>=6 && BF<=13 ){ fitness.innerHTML="Athele level of fitness" }
                else if(BF>=14 && BF<=17 ){fitness.innerHTML="You are fit!"}
                else if(BF>=18 && BF<=25 ){fitness.innerHTML="you need to join gym! Come and register yourself in our official website"}
                else {fitness.innerHTML="Obese!!! Come and contact our gym trainer for calorie deficit nutrition, we will guide you:)"}
            }
            else 
            {
                fatpercentage.innerHTML=(495/(1.29579-0.35004*(Math.log10(hip+waist-neck))+(0.221*Math.log10(height)))-450).toFixed(2);
                let BF=(495/(1.29579-0.35004*(Math.log10(hip+waist-neck))+(0.221*Math.log10(height)))-450).toFixed(2);
                if(BF>=10&&BF<=13){fitness.innerHTML="you do not have essential fat required for a healthy lifestyle" ;}
                else if(BF>=14&& BF<=20){ fitness.innerHTML="Athele level of fitness" }
                else if(BF>=21 && BF<=24 ){fitness.innerHTML="You are fit!"}
                else if(BF>=25 && BF<=31 ){fitness.innerHTML="you need to join gym! Come and register yourself in our official website"}
                else {fitness.innerHTML="Obese!!! Come and contact our gym trainer for calorie deficit nutrition, we will guide you:)"}
            }

              bodyfatmass.innerHTML=((fatpercentage.innerHTML/100)*weight);
              leanbodymass.innerHTML=((1-(fatpercentage.innerHTML/100))*weight).toFixed(2);
              document.getElementById("resulttable").style.display = "block";
            }

            var math= Math;
            console.log(math);

            
            setInterval(updatetime, 1000);
            function updatetime()
            {
              time.innerHTML=new Date();
            }

function resetValues()
{
  const rb = document.getElementsByClassName("rad")
  for(var i = 0; i < rb.length; i ++)
  {
    rb[i].checked = false
  }
  document.getElementById("weight").value = ""
  document.getElementById("height").value = ""
  document.getElementById("neck").value = ""
  document.getElementById("waist").value = ""
  document.getElementById("hip").value = ""
  document.getElementById("resulttable").style.display = "none";
}

function darkMode() {
  const body = document.body
  const changingLinkLight = document.getElementById("theme1")
  const changingLinkDark = document.getElementById("theme2")
  const table = document.getElementsByClassName("table")[0]
  const navbar = document.getElementsByTagName("nav")[0]
  const themeDropDown = document.getElementById("themeDropDown")

  body.style.backgroundColor = "black";
  body.style.color = "white"

  changingLinkLight.style.outline = "none"
  changingLinkDark.style.outline = "-webkit-focus-ring-color auto 1px"

  themeDropDown.style.color = "white"

  table.style.color = "white"

  navbar.classList.remove("navbar-light")
  navbar.classList.remove("bg-light")
  navbar.classList.add("navbar-dark")
  navbar.classList.add("bg-dark")
}

function lightMode() {
  const body = document.body
  const changingLinkLight = document.getElementById("theme1")
  const changingLinkDark = document.getElementById("theme2")
  const table = document.getElementsByClassName("table")[0]
  const navbar = document.getElementsByTagName("nav")[0]

  body.style.backgroundColor = "white";
  body.style.color = "black"

  changingLinkLight.style.outline = "-webkit-focus-ring-color auto 1px"
  changingLinkDark.style.outline = "none"

  themeDropDown.style.color = "black"

  table.style.color = "black"

  navbar.classList.add("navbar-light")
  navbar.classList.add("bg-light")
  navbar.classList.remove("navbar-dark")
  navbar.classList.remove("bg-dark")
}


//calories calculator starts from here.

function resetcalorieValues()
{
  const rb = document.getElementsByClassName("rad")
  for(var i = 0; i < rb.length; i ++)
  {
    rb[i].checked = false
  }
  document.getElementById("weight").value = ""
  document.getElementById("height").value = "" 
  document.getElementById("age").value = ""
  document.getElementById("calorieresulttable").style.display= "none"
  //need to add for resetting the id="floating selector grid" in "input table".
 
}

function calculatecalories()
{
  console.log("entered func");
            const gender = document.getElementById("gender").value
            const weight = parseFloat(document.getElementById("weight").value)
            const height = parseFloat(document.getElementById("height").value)
            const age = parseFloat(document.getElementById("age").value)
            const activity = parseFloat(document.getElementById("floatingSelectGrid").value)
            
            if(gender == "male")
            {
                maintain.innerHTML=(activity*((10*weight)+(6.25*height)-(5*age)+5)).toFixed(0)
            }
            else 
            {
              maintain.innerHTML=(activity*((10*weight)+(6.25*height)-(5*age)+161)).toFixed(0)               
            }
            mildloss.innerHTML=(0.91*maintain.innerHTML).toFixed(0)
            loss.innerHTML=(0.82*maintain.innerHTML).toFixed(0)
            extremeloss.innerHTML=(0.65*maintain.innerHTML).toFixed(0)
            document.getElementById("calorieresulttable").style.display = "block";
}


//Ideal weight calculations start here
function resetidealweightValues()
{
  const rb = document.getElementsByClassName("rad")
  for(var i = 0; i < rb.length; i ++)
  {
    rb[i].checked = false
  }
  
  document.getElementById("height").value = "" 
  document.getElementById("age").value = ""
  document.getElementById("calorieresulttable").style.display= "none"
  
 
}

function calculateidealweight()
{
  console.log("entered func");
            const gender = document.getElementById("gender").value
            
            const height = parseFloat(document.getElementById("height").value)
            const age = parseFloat(document.getElementById("age").value)
            const inch = ((height/2.54)-60)
           
            
           if(inch>=0)
           {
            if(gender == "male")
            {
                Robinson.innerHTML=(52+(1.9*inch)).toFixed(1)
                Miller.innerHTML=(56.2+(1.41*inch)).toFixed(1)
                Devine.innerHTML=(50+(2.3*inch)).toFixed(1)
                Hamwi.innerHTML=(48+(2.7*inch)).toFixed(1)
            }
            else 
            {
              Robinson.innerHTML=(47+(1.7*inch)).toFixed(1)
              Miller.innerHTML=(53.1+(1.36*inch)).toFixed(1)
              Devine.innerHTML=(45.5+(2.3*inch)).toFixed(1)
              Hamwi.innerHTML=(45.5+(2.2*inch)).toFixed(1)
            }
           }
           else{
            if(gender == "male")
            {
                Robinson.innerHTML=(52)
                Miller.innerHTML=(56.2)
                Devine.innerHTML=(50)
                Hamwi.innerHTML=(48)
            }
            else 
            {
              Robinson.innerHTML=(47)
              Miller.innerHTML=(53.1)
              Devine.innerHTML=(45.5)
              Hamwi.innerHTML=(45.5)
            }
           }
            
            document.getElementById("idealweightresulttable").style.display = "block";
}


