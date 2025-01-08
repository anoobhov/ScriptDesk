function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}

const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})




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
