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
// document.getElementById("imageInput").addEventListener("change", function (event) {
//     event.preventDefault()
//     const file = event.target.files[0]; // Get the first selected file
//     const imagediv = document.getElementsByClassName('image')
//     const preview = document.createElement("div");
//     preview.id = 'imagePreview'
//     imagediv[0].appendChild(preview)
    
  
  //   if (file) {
  //     const reader = new FileReader(); // FileReader to read the file as a data URL
  //     reader.onload = function (e) {
  //       preview.innerHTML = `<img src="${e.target.result}" alt="Thumbnail">`; 
  //     };
  //     reader.readAsDataURL(file); // Read the file as a data URL
  //   } else {
  //     preview.innerHTML = "Thumbnail will appear here"; // Reset preview if no file
  //   }
  // });


//notes section

// document.getElementById('note_it').addEventListener('click',(event)=>{
  
// })



//likes counting
// const button = getElementById('like-btn')
// function incrementLikes(button) {
//   const likeCountSpan = button.nextElementSibling; // Get the span next to the button
//   let currentLikes = parseInt(likeCountSpan.textContent, 10); // Get current like count
//   if (button.classList.contains('liked')) {
//     // If liked, decrement the count and remove 'liked' class
//     likeCountSpan.textContent = currentLikes - 1;
//     button.classList.remove('liked');
//     button.style.backgroundColor='transparent'
//   }
//   else{
//     likeCountSpan.textContent = currentLikes + 1;
//     button.classList.add('liked')
//     button.style.backgroundColor='green'
//   }
// }


const blogs = [
  {
    title: "The Future of Renewable Energy",
    author: "Alec Whitten",
    date: "17 Jan 2024",
    image:"./solar_panel.jpg",
    content:
    "Renewable energy sources, such as solar and wind, are playing an increasingly pivotal role in shaping the future of energy. These sustainable options are not only environmentally friendly but also economically viable as advancements in technology drive significant cost reductions and enhance overall efficiency. Innovations like improved solar panel designs, better energy storage solutions, and smarter grid systems are making renewable energy more accessible and reliable than ever before. This transition marks a critical step toward reducing our dependence on fossil fuels, combating climate change, and fostering a cleaner, greener planet. Join the movement toward a sustainable energy revolution",
    categories: ["Energy", "Technology"],
    likes: 45,
  },
  {
    title: "Designing for Accessibility",
    author: "Sophia Martinez",
    date: "05 Feb 2024",
    content:
      "Accessibility in design ensures that your products can be used by everyone, including those with disabilities. Explore tips and tools for creating inclusive user experiences.",
    categories: ["Design", "Inclusion"],
    likes: 345,
  },
  {
    title: "The Rise of AI in Everyday Life",
    author: "James Turner",
    date: "12 Mar 2024",
    content:
      "Artificial Intelligence is no longer confined to research labs. From smart assistants to self-driving cars, discover how AI is shaping our daily lives.",
    categories: ["AI", "Technology"],
    likes: 34,
  },
  {
    title: "Minimalist Living: A Lifestyle Revolution",
    author: "Emily Johnson",
    date: "28 Feb 2024",
    content:
      "Minimalism is not just about owning less; it's about creating more space for what truly matters. Learn how to declutter your life and find true happiness.",
    categories: ["Lifestyle", "Self-Help"],
    likes: 32,
  },
  {
    title: "The Evolution of Blockchain Technology",
    author: "Liam O'Connor",
    date: "10 Apr 2024",
    content:
      "Blockchain is more than just cryptocurrency. Delve into its applications in industries like healthcare, finance, and supply chain management.",
    categories: ["Technology", "Finance"],
    likes: 23,
  },
  {
    title: "The Art of Sustainable Fashion",
    author: "Olivia Brown",
    date: "22 Mar 2024",
    content:
      "Fast fashion is out, and sustainability is in. Discover how the fashion industry is evolving to embrace eco-friendly practices.",
    categories: ["Fashion", "Sustainability"],
    likes: 212,
  },
  {
    title: "Understanding Mental Health in the Digital Age",
    author: "Noah Davis",
    date: "15 Jan 2024",
    content:
      "The internet and social media have transformed how we connect, but at what cost? Explore strategies to maintain mental well-being in a hyperconnected world.",
    categories: ["Health", "Lifestyle"],
    likes: 342,
  },
];

let test_blog = blogs[0]
const cards = document.getElementById('cards')

let card = document.createElement('div')
card.className='card'

let img = document.createElement('img')
img.src=test_blog.image
card.appendChild(img)

let author_date = document.createElement('p')
author_date.textContent=`${test_blog.author} -- ${test_blog.date}`
card.appendChild(author_date)

let heading = document.createElement('h1')
heading.textContent=test_blog.title
card.appendChild(heading)

let content = document.createElement('p')
content.textContent=test_blog.content
card.appendChild(content)

let category = document.createElement('div')
category.className='category'
// for(let i=0;i<blogs['categories'].length;i++)
// {
let categories = document.createElement('a')
categories.className="categories links"

  categories.textContent=test_blog.categories[0]
  category.appendChild(categories)
  card.appendChild(category)
// }

let likes = document.createElement('div')
likes.id='likes'
let lyk_btn = document.createElement('button')
lyk_btn.id='like-btn'
// lyk_btn.onclick="incrementLikes(this)"
let counter = document.createElement('span')
counter.className='like-count'
counter.textContent=test_blog.likes
likes.appendChild(counter)

lyk_btn.innerHTML='<img src="./arrow-up.png" alt="" height="15px">'
likes.appendChild(lyk_btn)

card.appendChild(likes)

cards.appendChild(card)
