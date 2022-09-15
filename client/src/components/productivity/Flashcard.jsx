import React, { useState, useEFfect, startTransition, useEffect } from 'react';
const axios = require('axios');

export default function Flashcard() {

    const [wordBankIndex, setWordBankIndex] = useState(0);
    const [wordBank, setWordBank] = useState([{ word: 't1', definition: 'd1' }, { word: 't2', definition: 'd2' }])
    const [side, setSide] = useState('front');

    const [newTerm, setNewTerm] = useState('')
    const [newDefinition, setNewDefinition] = useState('')

    useEffect(() => {
        axios.get('/flashcards')
            .then((response) => {
                console.log(response.data);
                let sortedByStudyCount = response.data.sort((a, b) => a.studyCount - b.studyCount)
                setWordBank(sortedByStudyCount);
            });
    }, []);

    const addNewCard = () => {
        let newCard = {
            word: newTerm,
            definition: newDefinition,
            studyCount: 0
        }
        setNewDefinition('')
        setNewTerm('')
        axios.post('/flashcards', newCard)
            .then((response)=>{
                console.log(response.data);
                let sortedByStudyCount = response.data.sort((a, b) => a.studyCount - b.studyCount)
                setWordBank(sortedByStudyCount);
            })
    }

    const changeCard = (click) => {
        changeCount(1)
        if (click === 'left') {
            let newWordBankIndex = wordBankIndex - 1 > -1 ? wordBankIndex - 1 : wordBank.length - 1
            setWordBankIndex(newWordBankIndex)
        } else {
            let newWordBankIndex = wordBankIndex + 1 < wordBank.length ? wordBankIndex + 1 : 0
            setWordBankIndex(newWordBankIndex)
        }
    }

    const changeCount = (count) => {
        let newWordBank = [...wordBank]
        newWordBank[wordBankIndex].studyCount = Number(newWordBank[wordBankIndex].studyCount) + count
        setWordBank(newWordBank)
        let patchedWord = newWordBank[wordBankIndex]
        axios({
            method: 'patch',
            url: '/flashcards',
            data: patchedWord
        }).then(res=>{
            console.log(res.data)
            // setWordBank(res.data)
        })
    }

    const switchSides = () => {
        if (side === 'front') {
            setSide('back')
        } else {
            setSide('front')
        }
    }

    return (
        <div style={{margin: '20px'}}>
            <div onClick={() => {
                switchSides()
            }} style={{
                height: '300px', width: '500px', border: 'solid black 3px', borderRadius: '5px',
                display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'
            }}>

                {side === 'front' ?
                    <div style={{ textAlign: 'center', margin: 'auto' }}
                    >{wordBank[wordBankIndex].word}</div>
                    :
                    <div>{wordBank[wordBankIndex].definition}</div>
                }
                <img src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" height="30px"
                    style={{
                        position: 'absolute', left: '-30px', transform: 'rotate(180deg)'
                    }}
                    onClick={() => { changeCard('left') }}
                />
                <img src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" height="30px"
                    style={{
                        position: 'absolute', right: '-30px'
                    }}
                    onClick={(event) => { 
                        event.stopPropagation();
                        changeCard('right') }}
                />
                
            </div>
            <button onClick={()=>{
                changeCount(-5)
                changeCard('right')
            }}>Keep Learning</button>
            <button onClick={()=>{
                changeCount(50)
                changeCard('right')
            }}>Memorized</button>
            <div>
                New Cards:
                <br/>
                <div>Term:</div>
                <input onChange={(e)=>{
                    setNewTerm(e.target.value)
                }} value={newTerm}></input>
                <div>Definition:</div>
                <textarea rows='5' cols='40'  onChange={(e)=>{
                    setNewDefinition(e.target.value)
                }} value={newDefinition}></textarea>
                <button onClick={()=>{
                    addNewCard()
                }}>Submit</button>
            </div>
        </div>
    )
}