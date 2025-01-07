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
    image:"./images/solar_panel.jpg",
    content:
    `Renewable energy sources, such as solar and wind, are playing an increasingly pivotal role in shaping the future of energy. These sustainable options are not only environmentally friendly but also economically viable as advancements in technology drive significant cost reductions and enhance overall efficiency. Innovations like improved solar panel designs, better energy storage solutions, and smarter grid systems are making renewable energy more accessible and reliable than ever before. This transition marks a critical step toward reducing our dependence on fossil fuels, combating climate change, and fostering a cleaner, greener planet. Join the movement toward a sustainable energy revolution.
### The Rising Importance of Renewable Energy
The importance of renewable energy cannot be overstated. In an era where climate change poses an existential threat to the planet, transitioning to renewable energy sources is no longer just an option; it is a necessity. Global temperatures are rising, sea levels are climbing, and extreme weather events are becoming more frequent and devastating. The root cause of these alarming trends is the excessive reliance on fossil fuels, which emit large quantities of greenhouse gases into the atmosphere.

Renewable energy sources offer a solution to these pressing issues. Unlike coal, oil, and natural gas, renewables such as solar, wind, hydropower, and geothermal energy generate electricity without releasing harmful pollutants. This characteristic makes them a cornerstone in the global effort to mitigate the impacts of climate change. By embracing renewable energy, nations around the world can significantly reduce their carbon footprints and work toward achieving net-zero emissions.

### The Economic Viability of Renewables

One of the most compelling arguments for renewable energy is its economic potential. Over the past decade, the costs associated with solar and wind energy have plummeted, thanks to technological advancements and economies of scale. According to industry reports, the cost of solar photovoltaic (PV) panels has dropped by more than 80% since 2010, while the cost of wind turbines has decreased by approximately 50%. These trends have made renewables some of the most cost-effective energy sources available today.

Furthermore, renewable energy projects often create significant economic opportunities. The development, installation, and maintenance of renewable energy infrastructure require skilled labor, generating millions of jobs worldwide. For instance, the solar industry alone employed over 4 million people globally in 2022, with numbers expected to rise as the sector continues to expand. This economic ripple effect benefits local communities and stimulates growth in related industries, such as manufacturing and transportation.

### Innovations Driving the Renewable Revolution

The renewable energy sector has witnessed remarkable innovations that are accelerating its adoption and effectiveness. Solar energy, for example, has seen the development of high-efficiency solar cells that can capture more sunlight and convert it into electricity. These advancements have made solar power a practical option even in regions with less consistent sunlight.

Energy storage solutions have also undergone significant improvements. Batteries, particularly lithium-ion batteries, are becoming more efficient, durable, and affordable. These storage systems are essential for addressing the intermittent nature of renewable energy sources, such as solar and wind. By storing excess energy generated during peak production periods, batteries ensure a steady supply of electricity even when the sun isn’t shining or the wind isn’t blowing.

Smart grid technology is another game-changer. These advanced electrical grids use digital communication tools to monitor and manage energy flows in real time. Smart grids enable the integration of diverse energy sources, optimize energy distribution, and enhance the reliability of power systems. They also empower consumers to participate actively in energy conservation by providing insights into their energy usage patterns.

### Environmental Benefits

The environmental benefits of renewable energy are profound. By replacing fossil fuels with clean energy sources, we can dramatically reduce air pollution, which poses severe health risks to millions of people worldwide. Fine particulate matter and toxic gases emitted by burning fossil fuels are linked to respiratory and cardiovascular diseases, as well as premature deaths. Transitioning to renewables can help alleviate these public health challenges and improve overall quality of life.

In addition to reducing air pollution, renewable energy helps preserve natural ecosystems. Fossil fuel extraction often involves environmentally destructive practices, such as mountaintop removal mining and offshore drilling, which disrupt habitats and harm wildlife. In contrast, renewable energy projects can be designed with minimal ecological impact, ensuring that the planet’s biodiversity is protected.

### Energy Security and Independence

Renewable energy also enhances energy security and independence. Fossil fuel markets are highly volatile, with prices fluctuating due to geopolitical tensions, supply disruptions, and market dynamics. This unpredictability can have severe economic consequences, particularly for nations that rely heavily on imported fossil fuels.

In contrast, renewable energy sources are abundant and locally available in most regions. Harnessing solar, wind, and other renewables allows countries to reduce their dependence on imported energy, insulate themselves from global market shocks, and achieve greater energy self-sufficiency. This shift not only strengthens national security but also promotes resilience in the face of global crises.

### The Role of Policy and Investment

The widespread adoption of renewable energy requires supportive policies and substantial investment. Governments play a crucial role in fostering the growth of the renewable sector by implementing incentives, such as tax credits, subsidies, and feed-in tariffs. These measures make renewable energy projects more financially attractive and encourage private sector participation.

Public and private investments are equally critical. Large-scale renewable energy projects, such as wind farms and solar power plants, require significant upfront capital. Financial institutions and investors must recognize the long-term benefits of renewables and allocate resources accordingly. Moreover, investment in research and development is essential to drive further innovations and bring emerging technologies, such as green hydrogen and advanced nuclear fusion, to market.

### Overcoming Challenges

Despite its many advantages, the transition to renewable energy is not without challenges. One of the primary obstacles is the intermittency of renewable sources. Solar and wind energy production depends on weather conditions, which can be unpredictable. However, advancements in energy storage and grid management are gradually addressing this issue.

Another challenge is the integration of renewables into existing energy systems. Many countries have infrastructure designed for fossil fuel-based power generation, making the transition to renewables a complex and resource-intensive process. Upgrading transmission lines, modernizing power plants, and building new renewable energy facilities require coordinated efforts and substantial funding.

### A Global Movement

The shift toward renewable energy is a global movement that transcends borders. Countries around the world are setting ambitious renewable energy targets and investing in clean energy projects. For example, Germany’s Energiewende initiative aims to achieve a renewable energy share of at least 80% by 2050. Similarly, India’s National Solar Mission seeks to establish the country as a global leader in solar energy by achieving 100 GW of solar capacity.

International collaboration is also vital. Organizations like the International Renewable Energy Agency (IRENA) and initiatives like the Paris Agreement provide platforms for countries to share knowledge, resources, and best practices. By working together, nations can accelerate the transition to a sustainable energy future and address the shared challenge of climate change.
 Conclusion

Renewable energy is not just a technological advancement; it is a societal transformation. As we harness the power of the sun, wind, and other natural forces, we are building a cleaner, greener, and more sustainable world for future generations. This transition requires collective action, innovative solutions, and unwavering commitment from individuals, businesses, and governments alike. By embracing renewable energy, we can reduce our environmental footprint, enhance energy security, and create a prosperous future for all. The time to act is now—join the renewable energy revolution and be a part of the solution.

`,
    categories: ["Energy", "Technology"],
    likes: 45,
  },
  {
    title: "Designing for Accessibility",
    author: "Sophia Martinez",
    date: "05 Feb 2024",
    image:"./images/solar_panel.jpg",
    content:
      "Accessibility in design ensures that your products can be used by everyone, including those with disabilities. Explore tips and tools for creating inclusive user experiences.",
    categories: ["Design", "Inclusion"],
    likes: 345,
  },
  {
    title: "The Rise of AI in Everyday Life",
    author: "James Turner",
    date: "12 Mar 2024",
    image:"./images/solar_panel.jpg",
    content:
      "Artificial Intelligence is no longer confined to research labs. From smart assistants to self-driving cars, discover how AI is shaping our daily lives.",
    categories: ["AI", "Technology"],
    likes: 34,
  },
  {
    title: "Minimalist Living: A Lifestyle Revolution",
    author: "Emily Johnson",
    date: "28 Feb 2024",
    image:"./images/solar_panel.jpg",
    content:
      "Minimalism is not just about owning less; it's about creating more space for what truly matters. Learn how to declutter your life and find true happiness.",
    categories: ["Lifestyle", "Self-Help"],
    likes: 32,
  },
  {
    title: "The Evolution of Blockchain Technology",
    author: "Liam O'Connor",
    date: "10 Apr 2024",
    image:"./images/solar_panel.jpg",
    content:
      "Blockchain is more than just cryptocurrency. Delve into its applications in industries like healthcare, finance, and supply chain management.",
    categories: ["Technology", "Finance"],
    likes: 23,
  },
  {
    title: "The Art of Sustainable Fashion",
    author: "Olivia Brown",
    date: "22 Mar 2024",
    image:"./images/solar_panel.jpg",
    content:
      "Fast fashion is out, and sustainability is in. Discover how the fashion industry is evolving to embrace eco-friendly practices.",
    categories: ["Fashion", "Sustainability"],
    likes: 212,
  },
  {
    title: "Understanding Mental Health in the Digital Age",
    author: "Noah Davis",
    date: "15 Jan 2024",
    image:"./images/solar_panel.jpg",
    content:
      "The internet and social media have transformed how we connect, but at what cost? Explore strategies to maintain mental well-being in a hyperconnected world.",
    categories: ["Health", "Lifestyle"],
    likes: 342,
  },
];

for(let i = 0;i<blogs.length;i++)
{
let test_blog = blogs[i]
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
for(let j=0;j<test_blog['categories'].length;j++)
{
let categories = document.createElement('a')
categories.className="categories links"

  categories.textContent=test_blog['categories'][j]
  category.appendChild(categories)
  
}
card.appendChild(category)
let likes = document.createElement('div')
likes.id='likes'
let lyk_btn = document.createElement('button')
lyk_btn.id='like-btn'
// lyk_btn.onclick="incrementLikes(this)"
let counter = document.createElement('span')
counter.className='like-count'
counter.textContent=test_blog.likes
likes.appendChild(counter)

lyk_btn.innerHTML='<img src="./images/arrow-up.png" alt="" height="15px">'
likes.appendChild(lyk_btn)

card.appendChild(likes)

cards.appendChild(card)
}