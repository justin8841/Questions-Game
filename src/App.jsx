

import { useState } from 'react'
import './App.css'


const questions = [{
  "question" : "question 1 an example",
  "answer1" : ["answer A, this is true", true],
  "answer2" : ["answer B, this is false", false],
  "answer3" : ["answer C, this is false", false],
},
{
  "question" : "question 2 another example",
  "answer1" : ["answer A, this is false", false],
  "answer2" : ["answer B, this is false", false],
  "answer3" : ["answer C, this is true", true],
},
{
  "question" : "question 3 last example",
  "answer1" : ["answer A, this is false", false],
  "answer2" : ["answer B, this is true", true],
  "answer3" : ["answer C, this is false", false],
},
]

 

// eslint-disable-next-line react/prop-types
function Card({quizStatus, setQuizStatus, handleMore}) {
  let question = questions[quizStatus];
  function questionNumbr() {
    setQuizStatus(quizStatus + 1)
  }

  return (
      <>
        <h1>The Questions Game</h1>
        <h2>Question Nº{quizStatus + 1}</h2>
        <h3>{question.question}</h3>
        <ul className= "ans-container">
          <AnsList 
          handleMore= {handleMore}
          ans1={question.answer1}
          ans2={question.answer2}
          ans3={question.answer3}
          >
          </AnsList>
          <button className="next" onClick={questionNumbr}>NEXT</button>
        </ul>
    </>
  )
}
// eslint-disable-next-line react/prop-types
function AnsList({ ans1, ans2, ans3, handleMore}) {

  return(
    <> 
    <li>{ans1[1] ? (<button className='correct' onClick={handleMore}>{ans1}</button>):(<button className='incorrect'onClick={()=> alert("wrong")}>{ans1}</button>)}</li>
    <li>{ans2[1] ? (<button className='correct' onClick={handleMore}>{ans2}</button>):(<button className='incorrect'onClick={()=> alert("wrong")}>{ans2}</button>)}</li>
    <li>{ans3[1] ? (<button className='correct' onClick={handleMore}>{ans3}</button>):(<button className='incorrect'onClick={()=> alert("wrong")}>{ans3}</button>)}</li>
    </>
    
  )
}
  

function Title(){
  return(
    <>
    <h1>Game Over</h1>
    <p>Thanks for playing <br /> refresh page </p>
    </>
  )
}
function App() {
  const [quizStatus , setQuizStatus] = useState(0);
  const [point , setPoint] = useState(0)
  function handleMore() {
    if (point > quizStatus) {
      return
    }else setPoint( point + 1)
  }
  return (
    <>
    <div className='game-container'>
     {(quizStatus < questions.length ) ?(
     <Card
     quizStatus={quizStatus}
     setQuizStatus={setQuizStatus}
     handleMore={handleMore}
     ></Card>
     ) : (<Title></Title>)}
    </div>
    <h2 className='score'> Your score {point}</h2>
    </>
    
    
  )
}

export default App
