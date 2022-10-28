const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; 
button.onclick = ()=>{
  input.click(); 
}

input.addEventListener("change", function(){
 
  dropArea.classList.add("active");
  showFile(); 
});

dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); 
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});





dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});



dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
  file = event.dataTransfer.files[0];
  showFile(); 
});



//not working :(
  // please fix that
function showFile(){
  let fileType = file.type; 
  let validExtensions = ["file.pdf", "file.docx"];
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader();
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; 
      let fileTag = `<input type="${fileURL}">`; 
      dropArea.innerHTML = fileTag; 
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not a PDF/DOCX File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}