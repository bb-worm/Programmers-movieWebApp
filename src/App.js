import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Iternal Sunshine",
  "Boyhood",
  "Spiderman",
  "Star Wars"
]

const movieImages= [
  "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAyXFxcLzE2MTYzMzA0XFxcL2V0ZXJuMS0xMDI0eDU3Ni5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yNjRhMmRiZTM3MGYyYzY3NWZjZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIzZjc3MzhmYTg4ZDhkOTliNWNmOTNmMmEwMTJkYmY5NjI1NGU0ZDYwIn0=/etern1-1024x576.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Of9aPL49GRAz67OO4DkEZffcD--O7xSVp3zHvboiR6hv7H0J&s",
  "https://scdn.slashgear.com/wp-content/uploads/2019/09/spider-man_main-1280x720.jpg",
  "https://cdn.images.express.co.uk/img/dynamic/36/590x/Star-Wars-actor-slams-The-Last-Jedi-1134707.jpg?r=1559328214519"
]

const movies =  [
  {
    title: "Iternal Sunshine",
    poster: "https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE2XFxcLzAyXFxcLzE2MTYzMzA0XFxcL2V0ZXJuMS0xMDI0eDU3Ni5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yNjRhMmRiZTM3MGYyYzY3NWZjZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIzZjc3MzhmYTg4ZDhkOTliNWNmOTNmMmEwMTJkYmY5NjI1NGU0ZDYwIn0=/etern1-1024x576.jpg"
  },
  {
    title: "Boyhood",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Of9aPL49GRAz67OO4DkEZffcD--O7xSVp3zHvboiR6hv7H0J&s"
  },
  {
    title: "Spiderman",
    poster: "https://scdn.slashgear.com/wp-content/uploads/2019/09/spider-man_main-1280x720.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://cdn.images.express.co.uk/img/dynamic/36/590x/Star-Wars-actor-slams-The-Last-Jedi-1134707.jpg?r=1559328214519"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
