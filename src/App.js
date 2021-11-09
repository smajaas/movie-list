
import './App.css';
import {useState} from 'react';

export default function App() {
  const movies = [
     {
       name: "Alaipayuthey",
      pic:
         "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Alaipayuthey.jpg/220px-Alaipayuthey.jpg",
       ratings: "8.3",
       summary:
        "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be.",
    },
    {
      name: "Thalapathy",
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcKS7ap6h4O-W-jcDSLxTrwvGXeZS8vNuKA&usqp=CAU",
      ratings: "8.5/10",
      summary:
        "Surya, a courageous man who was raised in the slums, fights for the rights of the poor. However, he becomes friends with Deva who hires him as his commander and changes his life completely.",  
    },
    {
      name: "Super Deluxe",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Super_Deluxe_film_poster.jpg/220px-Super_Deluxe_film_poster.jpg",
      ratings: "8.4/10",
      summary:
        "An unfaithful wife, an angry boy, and a transgender woman must all face their demons on one fateful day in a city of contradictions.",      
    },
    {
      name: "Kammatti Paadam",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/2/2a/Kammatipaadam_poster.jpg",
      ratings: "8.1/10",
      summary:
        "Krishnan, who is working in Mumbai, returns to Kammattippaadam after his childhood friend, Ganga, calls for help. There, they find themselves in danger as their criminal past comes back to haunt them.",     
    },
    {
      name: "The Shawshank Redemption",
      pic: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      ratings: "9.3/10",
      summary:
        "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    },
    {
      name: "The Pursuit of Happyness",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Poster-pursuithappyness.jpg/220px-Poster-pursuithappyness.jpg",
      ratings: "8/10",
      summary:
        "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
      },
    {
      name: "No Country for Old Men",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      ratings: "8.1/10",
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",     
    },
    {
    name: "The Notebook",
                  pic:
                    "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
                  ratings: "7.8/10",
                  summary:
                    "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
                      },   
             {
            name: "Rang De Basanti",
            pic:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Rang_De_Basanti_poster.jpg/220px-Rang_De_Basanti_poster.jpg",
            ratings: "8.1/10",
            summary:
              "When Sue selects a few students to portray various Indian freedom fighters in her film, she unwittingly awakens their patriotism. The emotional and mental process turns them into rebels for a cause.",
                },
                {
                  name: "Pink",
                  pic:
                    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Pinkmovieposter.jpg/220px-Pinkmovieposter.jpg",
                  ratings: "8.1/10",
                  summary:
                    "After being molested, Minal, along with her friends, tries to file an FIR against a politician's nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.",
                      },
                      {
                        name: "Jai Bhim",
                        pic:
                          "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Jai_Bhim_film_poster.jpg/220px-Jai_Bhim_film_poster.jpg",
                        ratings: "9.6/10",
                        summary:
                          "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
                            },
        
                            {
                                name: "Sudani from Nigeria",
                                pic:
                                  "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sudani_from_Nigeria_poster.jpg/220px-Sudani_from_Nigeria_poster.jpg",
                                ratings: "8.2/10",
                                summary:
                                  "Majeed, a football manager, recruits three Nigerian footballers for his team. When Samuel, one of the players, is injured, Majeed lets him stay at his house and over time, they develop a close bond.",
                                    },
                             
  ];

return (
  <div className="App">

       {/* <Counter /> */}
   <MovieList movies={movies}/>
      </div>
        );

      }



function Counter() {

  //let like=10;
  //const [state,setState]=useState(InitialValue);

  const [like,setLike] = useState(0);
  const [dislike,setDislike] = useState(0);
  return ( 
    <div className="counter-container">
      <button class="like-unlike" onClick={()=>{ setLike(like+1);}}>👍{like} </button>
      <button class="like-unlike" onClick={()=>{ setDislike(dislike+1);}}>👎{dislike}</button> 
    </div>

  );
}
function MovieList({movies}) {
  return(
<section className="movie-list">
{movies.map(({name,ratings,summary,pic})=>(
  <Movie 
  name = {name}
  ratings={ratings}
  summary={summary}
  pic={pic}
  />

))
}

</section>
  )}


function Movie({name,ratings,summary,pic}) {
  return (
  <div className="movie-container">
    <img 
    src={pic}
    alt={name} 
    className="movie-poster"/>
    <div className="movie-specs">
     <h3 className="movie-name">{name}</h3>
    <p className="movie-rating">⭐{ratings}</p>
    </div>
    <p class = "movie-summary">{summary}</p>
    <Counter />
   
  </div>
  );
}

// *************************************************************************************************************************
// *************************************************************************************************************************

/*{/* {movies.map((mv)=>(
         <Movie 
         name = {mv.name}
         ratings={mv.ratings}
         summary={mv.summary}
         pic={mv.pic}
         /> 

        {/*destructured map } */

        //import {useState} from 'react'
 //Hook is a function - starts with 'use'     

 // like=like+1;
        // console.log(like);

         // like=like+1;
        // console.log(like);

         {/* <p>{like}</p> */}
