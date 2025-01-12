// import {blogs} from './script.js'
// import blogs from "./script.js";
//blogs


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
content.addEventListener('mouseenter', function (event) {
	event.preventDefault()
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function (event) {
			event.preventDefault()
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function (event) {
			event.preventDefault()
			content.setAttribute('contenteditable', true);
		})
	})
})








//handling the image inserted
// document.getElementById("imageInput").addEventListener("change", function (event) {
//     event.preventDefault()
//     const file = event.target.files[0]; // Get the first selected file
//     const imagediv = document.getElementsByClassName('image')
//     const preview = document.createElement("div");
//     preview.id = 'imagePreview'
//     imagediv[0].appendChild(preview)
    
  
//     if (file) {
//       const reader = new FileReader(); // FileReader to read the file as a data URL
//       reader.onload = function (e) {
//         preview.innerHTML = `<img src="${e.target.result}" alt="Thumbnail">`; 
//       };
//       reader.readAsDataURL(file); // Read the file as a data URL
//     } else {
//       preview.innerHTML = "Thumbnail will appear here"; // Reset preview if no file
//     }
//   });


//extracting the content
document.querySelector('#publish-btn').addEventListener('click',(event)=>{
	event.preventDefault()
	const title = document.getElementById('title-section').value
	const content = document.getElementById('content').innerHTML
	console.log('button-clicked')
	// console.log(title)
	// console.log(content)
	const author = 'You'

	const today = new Date();

	const year = today.getFullYear();
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = monthNames[today.getMonth()]; 
	const day = String(today.getDate()).padStart(2, '0');

	const date = `${day} ${month} ${year}`;
	const image = 'fde'
	blogs.push({title,author,date,image,content});
	console.log(blogs)
})

let drafts = [];

document.querySelector('#draft-btn').addEventListener('click',(event)=>{
	event.preventDefault()
	const title = document.getElementById('title-section').value
	const content = document.getElementById('content').innerHTML
	console.log('button-clicked')
	// console.log(title)
	// console.log(content)
	const author = 'You'

	const today = new Date();

	const year = today.getFullYear();
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = monthNames[today.getMonth()]; 
	const day = String(today.getDate()).padStart(2, '0');

	const date = `${day} ${month} ${year}`;
	const image = 'fde'
	drafts.push({title,author,date,image,content});
	console.log(drafts)
})

















