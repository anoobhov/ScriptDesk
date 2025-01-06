// for (let i = 0; i < 50; i++) {
//     const dot = document.createElement('div');
//     dot.classList.add('dot');
//     dot.style.left = `${Math.random() * 100}vw`;
//     dot.style.top = `${Math.random() * 100}vh`;
//     dot.style.animationDelay = `${Math.random() * 5}s`;
//     document.body.appendChild(dot);
//     // let main = document.getElementById('main')
//     // main.appendChild(dot)
// }

// animation
for (let i = 0; i < 70; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    const docWidth = document.documentElement.scrollWidth;
    const docHeight = document.documentElement.scrollHeight;
    
    dot.style.left = `${Math.random() * docWidth}px`;
    dot.style.top = `${Math.random() * docHeight}px`;
    dot.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(dot);
}


//handling the image inserted
document.getElementById("imageInput").addEventListener("change", function (event) {
    event.preventDefault()
    const file = event.target.files[0]; // Get the first selected file
    const imagediv = document.getElementsByClassName('image')
    const preview = document.createElement("div");
    preview.id = 'imagePreview'
    imagediv[0].appendChild(preview)
    
  
    if (file) {
      const reader = new FileReader(); // FileReader to read the file as a data URL
      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Thumbnail">`; 
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      preview.innerHTML = "Thumbnail will appear here"; // Reset preview if no file
    }
  });


//notes section

document.getElementById('note_it').addEventListener('click',(event)=>{
  event.preventDefault()
  const values = document.getElementById('notes')
  const note_div = document.createElement('div')
  note_div.className="noted_notes"
  note_div.textContent=values.value
  note_div.appendChild(document.getElementById("wer"))
})