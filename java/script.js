
async function data() {
    try {
      let movies = await fetch('https://dummyapi.online/api/movies')
      const data = await movies.json() 

console.log(data)
      function fetchContent(data) {

        let contentbox  = document.getElementsByClassName('content-box')
      let showbigbox = document.getElementById('showing')
        showbigbox.innerHTML = "";


        console.log(data)



        // loop
        data.forEach((value )=> {




          const moviebox = document.createElement('div');
         
          moviebox.className = 'movie';
          moviebox.innerHTML = `
                          <span id="cover">
                              <img src="" id="imge" alt="">
                          </span>
                          <div id="name">
                              ${value.movie}
                          </div>
                          <p class="pname"></p>
                          <p class="des"></p>
                      `;
          showbigbox.appendChild(moviebox);
                   



/// locked code {

          // let moviee = document.createElement('div')
          // moviee.className = 'movie'
          // let coverr = document.createElement('span')
          // coverr.id = "cover"
          // moviee.appendChild(coverr)
          // const imgg = document.createElement('img');

          // imgg.id = "imge";
          // imgg.src = //`${value.name}`
          //   moviee.appendChild(imgg)
          // let namee = document.createElement('div')
          // namee.id = "name"
          // moviee.appendChild(namee)
          // moviee.innerHTML = value.movie;
          // showbigbox.appendChild(moviee)   }
        })




      }


      // value.querySelectorAll('img').attributes[0].value = data[index].image
      // value.querySelector('.pname').innerText = data[index].movie              




      function filterdataset() {
        let searchinputt = document.getElementById('searchbox').value
        let filtersearch = data.filter(data => data.movie.includes(searchinputt))
        fetchContent(filtersearch)


      }
      document.getElementById('searchbox').addEventListener('input', filterdataset)
      document.getElementById('searchicon').addEventListener('click', filterdataset)
      fetchContent(data)


    } catch (error) {
      console.log(error)

    }
    fetch("http://localhost:3000/image")
    .then((res) => {
      return res.json();
    })
   .then((dat) => {

     let showbox = document.querySelectorAll('.movie')

    console.warn(dat)
  
    showbox.forEach((value, index) => {
   console.warn(   value.querySelectorAll('img'))
value.querySelectorAll('img')[0].src = dat[index].image;


   });

    });

  
  }

data()

