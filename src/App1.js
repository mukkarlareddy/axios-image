 import React,{useState} from 'react';
import FlashcardList from './FlashcardList';
import './Flash.css'
  function App () {
    const [flashcards,setFlashcards] = useState (SAMPLE_FLASHCARDS)
    return (
      
       <FlashcardList flashcards = {flashcards}/>
        
    );
  }
  const SAMPLE_FLASHCARDS = [
    {

    id :1,
    question : 'what is 2+2?',
    answer : '4',
    Option : [
    '2',
    '3',
    '4',
    '5'
    ]
},

{
    id :1,
    question : "question 2?",
    answer : 'Answar',
    Option : [
    'Answar',
    'Answar1',
    'Answar2',
    'Answar3'
    ]
} 
]
  export default App;