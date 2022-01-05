// App js 

const downloadBtn = document.querySelector("#donwload-btn");
const toggleTheme = document.querySelector("#toggleTheme");
const resumeArea = document.querySelector("#resume-area");


 function genaratePdf() {
        // Get the element.
        var element = document.getElementById('resume-area');

        // Generate the PDF.
        html2pdf().from(element).set({
          margin: 1,
          filename: 'your-resume.pdf',
          html2canvas: { scale: 2 },
          jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
        }).save();


      }



downloadBtn.addEventListener("click",function(e){
    e.preventDefault();
    genaratePdf();
})

  var getTheme = localStorage.getItem("theme");
  if(getTheme=="darkmode"){
      document.querySelector("body").classList.remove("lightmode");
      document.querySelector("body").classList.add("darkmode");
  }else if(getTheme=="lightmode"){
      document.querySelector("body").classList.remove("darkmode");
      document.querySelector("body").classList.add("lightmode");
  }
  if(getTheme==null){
    localStorage.setItem("theme","lightmode")
  }


toggleTheme.addEventListener("click",function(){
    if(document.querySelector("body").classList.contains("lightmode")){
      document.querySelector("body").classList.remove("lightmode");
      document.querySelector("body").classList.add("darkmode");
     localStorage.setItem("theme","darkmode");
      document.querySelector("#toggleTheme .fas").classList.add("fa-sun");
    }else if(document.querySelector("body").classList.contains("darkmode")){
      document.querySelector("#toggleTheme .fas").classList.remove("fa-sun");
      document.querySelector("body").classList.remove("darkmode");
      localStorage.setItem("theme","lightmode");
      document.querySelector("body").classList.add("lightmode");
    }
})








