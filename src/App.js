
import './App.css';
import { Switch, Route, Link,Redirect, useHistory} from "react-router-dom";
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import {useState,useEffect} from 'react';
import "./App.css";
import { NotFound } from './NotFound';
import { Welcome } from './Welcome';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


export default function App() {
  const Initial_movies = [
     {
       id:"100",
       name: "Alaipayuthey",
      pic:
         "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Alaipayuthey.jpg/220px-Alaipayuthey.jpg",
       ratings: 8.3,
       summary:
        "Karthik and Shakti marry against the wishes of their families and start their new life. However, they soon realise that marriage is not the bed of roses they had imagined it would be.",
    trailer:"https://www.youtube.com/embed/BRFdGc3ku-k",
     },
    {
      id:"101",
      name: "Thalapathy",
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYcKS7ap6h4O-W-jcDSLxTrwvGXeZS8vNuKA&usqp=CAU",
      ratings: 8.5,
      summary:
        "Surya, a courageous man who was raised in the slums, fights for the rights of the poor. However, he becomes friends with Deva who hires him as his commander and changes his life completely.",  
    trailer:"https://www.youtube.com/embed/-MEJKs5m-cU",
    },
    {
      id:"102",
      name: "Super Deluxe",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Super_Deluxe_film_poster.jpg/220px-Super_Deluxe_film_poster.jpg",
      ratings: 8.4,
      summary:
        "An unfaithful wife, an angry boy, and a transgender woman must all face their demons on one fateful day in a city of contradictions.",      
    trailer:"https://www.youtube.com/embed/3-Xq_Zz3nPA",
      },
    {
      id:"103",
      name: "Kammatti Paadam",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/2/2a/Kammatipaadam_poster.jpg",
      ratings: 8.1,
      summary:
        "Krishnan, who is working in Mumbai, returns to Kammattippaadam after his childhood friend, Ganga, calls for help. There, they find themselves in danger as their criminal past comes back to haunt them.",     
    trailer:"https://www.youtube.com/embed/I3Edox4wBYs",
    },
    {
      id:"104",
      name: "The Shawshank Redemption",
      pic: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      ratings: 9.3,
      summary:
        "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    trailer:"https://www.youtube.com/embed/P9mwtI82k6E",
    
      },
    {
      id:"105",
      name: "The Pursuit of Happyness",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Poster-pursuithappyness.jpg/220px-Poster-pursuithappyness.jpg",
      ratings: 8,
      summary:
        "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
        trailer: "https://www.youtube.com/embed/DMOBlEcRuw8",
      },
    {
      id:"106",
      name: "No Country for Old Men",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      ratings: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",     
    trailer:"https://www.youtube.com/embed/38A__WT3-o0",
      },
    {
      id:"107",
    name: "The Notebook",
                  pic:
                    "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
                  ratings: 7.8,
                  summary:
                    "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
                  trailer:"https://www.youtube.com/embed/FC6biTjEyZw",    
                  
                  },   
             {
               id:"108",
            name: "Rang De Basanti",
            pic:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Rang_De_Basanti_poster.jpg/220px-Rang_De_Basanti_poster.jpg",
            ratings: 8.1,
            summary:
              "When Sue selects a few students to portray various Indian freedom fighters in her film, she unwittingly awakens their patriotism. The emotional and mental process turns them into rebels for a cause.",
               trailer:"https://www.youtube.com/embed/QHhnhqxB4E8",
             },
                {
                  id:"109",
                  name: "Pink",
                  pic:
                    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Pinkmovieposter.jpg/220px-Pinkmovieposter.jpg",
                  ratings: 8.1,
                  summary:
                    "After being molested, Minal, along with her friends, tries to file an FIR against a politician's nephew. When the subsequent case gets rigged, Deepak, a retired lawyer, helps them to fight the case.",
                  trailer:"https://www.youtube.com/embed/AL2TShb6fFs",    
                  
                  },
                      {
                        id:"110",
                        name: "Jai Bhim",
                        pic:
                          "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Jai_Bhim_film_poster.jpg/220px-Jai_Bhim_film_poster.jpg",
                        ratings: 9.6,
                        summary:
                          "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
                        trailer:"https://www.youtube.com/embed/Gc6dEDnL8JA",    
                        },
        
                            {
                              id:"111",
                                name: "Sudani from Nigeria",
                                pic:
                                  "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sudani_from_Nigeria_poster.jpg/220px-Sudani_from_Nigeria_poster.jpg",
                                ratings: 8.2,
                                summary:
                                  "Majeed, a football manager, recruits three Nigerian footballers for his team. When Samuel, one of the players, is injured, Majeed lets him stay at his house and over time, they develop a close bond.",
                                  
                             trailer:"https://www.youtube.com/embed/EHyaTJGmN4k",
                                  },
  ];

const [movies,setMovies]=useState(Initial_movies);
const history = useHistory();
const [mode,setMode] =useState("dark");


const theme = createTheme({
  palette: {
    mode: mode,
  },
});

useEffect(()=> {
  fetch("https://6166c4eb13aa1d00170a671d.mockapi.io/movies-list")
  .then((data)=>data.json())
  .then((mvs)=>setMovies(mvs));
})
  

return (
    <ThemeProvider theme={theme}>
      <Paper elevation={5} style={{borderRadius:"0px", minHeight:"100vh"}}>
    <div className="App">

<AppBar position="static" style={{marginBottom:"26px",height:"50px"}}>
  <Toolbar variant="dense">
  <Button variant="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>

    <Button variant="text" color="inherit" onClick={()=>history.push("/movies")}>Movies</Button>
  
  <Button variant="text" color="inherit" onClick={()=>history.push("/add-movies")}>Add Movies</Button>
  
  <Button variant="text" color="inherit" onClick={()=>history.push("/color-game")}>Color Game</Button>

  <Button variant="text" color="inherit" onClick={()=>history.push("/tic-tac-toe")}>Tic-Tac-Toe Game</Button>

  <Button 
  startIcon = {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
  style={{marginLeft: "auto"}} variant="text" color="inherit" 
  onClick={()=> setMode (mode==="light" ? "dark" :"light")} 
  >
    {mode==="light" ? "Dark" : "Light"} mode 
    </Button>
    </Toolbar>
</AppBar>

       <Switch>
    <Route exact path="/">
        <Welcome/>
      </Route>

      <Route path="/films">
        <Redirect to="/movies"/>
          </Route>

      <Route path="/movies/edit/:id">
        <EditMovie movies={movies} setMovies={setMovies} /></Route>

       <Route path="/movies/:id">
       <MovieDetails movies={movies}/>
       </Route>


      <Route path="/movies"> 
         <MovieList movies={movies} setMovies={setMovies}/>
      </Route>

      <Route path="/add-movies">
        <AddMovie movies={movies} setMovies={setMovies}/>
      </Route>

      <Route path="/color-game">
       <AddColor/>
      </Route>
      <Route path="/tic-tac-toe">
       <TicTacToe/>
      </Route>


      <Route path="**">
       <NotFound />
      </Route>

       </Switch>
       
  </div>
  </Paper>
  </ThemeProvider>
          );
      }
//Created Tic Tac Toe game

function TicTacToe() {
  const { width, height } = useWindowSize()
  const [board,setBoard] = 
  // useState([0,1,2,3,4,5,6,7,8]);
    useState([null,null,null,null,null,null,null,null,null]);
      const [isXTurn,setIsXTurn] = useState(true);
  

  const decideWinner = (board) => {
    const lines = [[0,1,2], [3,4,5], 
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],
    [2,4,6],

    ];

    for (let i=0;i<lines.length;i++) {
      const [a,b,c] = lines[i];

      if(board[a]!==null && board[a]===board[b] && board[b]===board[c]) {
      // console.log("Winner is", board[a]);
      return board[a];
    }
  }
  return null;
  };
  const winner = decideWinner(board);

  const handleClick=(index)=>{
   
    if(winner===null && !board[index]){
    const boardCopy = [...board]
    boardCopy[index]=isXTurn ? "X" : "O";
    setBoard(boardCopy);
    setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="full-game">
      {winner ? <Confetti
      width={width}
      height={height} gravity={0.5} numberOfPieces={600} /> : ""}
   
    <div className="board">
      {board.map((val,index)=> (
        <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
      ))}
  
    </div>
    {winner ? <h2>Winner is: {winner}</h2> : ""}
    </div>
  );
      }

function GameBox({ onPlayerClick, val }) {
  // const [val,setVal] =useState(null);
  const styles = { color : val === "X" ? "green": "red"};
  return (
  <div style={styles}
  onClick={onPlayerClick} className="game-box">
    
 {val}
 </div>
  );

}
