import React, { useState, useEFfect, startTransition, useEffect } from 'react';
const axios = require('axios');

export default function Flashcard() {

    const [view, setView] = useState('flashcard')

    const [wordBankIndex, setWordBankIndex] = useState(0);
    const [wordBank, setWordBank] = useState([{ word: 'add words to your collection', definition: 'and they will show up here' }, { word: 'here is another sample word', definition: 'and a sample definition (adding cards will delete this)' }])
    const [side, setSide] = useState('front');

    const [newTerm, setNewTerm] = useState('')
    const [newDefinition, setNewDefinition] = useState('')

    useEffect(() => {
        axios.get('/flashcards')
            .then((response) => {
                console.log(response.data);
                if (response.data.length === 0) {
                    setWordBank([{ word: 'add words to your collection', definition: 'and they will show up here' }, { word: 'here is another sample word', definition: 'and a sample definition (adding cards will delete this)' }])
                    return;
                }
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
        setSide('front')
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
    //view switch to add card ?
    return (
        <div style={{marginLeft: '50px', marginTop: '50px', marginRight: '50px', width: '500px'}}>

            <div onClick={() => {
                switchSides()
            }} style={{
                height: '300px',
                 border: 'solid black 3px', borderRadius: '10px',
                display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'
            }}>

                {side === 'front' ?
                    <div style={{ textAlign: 'center', margin: 'auto' }}
                    >{wordBank[wordBankIndex].word}</div>
                    :
                    <div>{wordBank[wordBankIndex].definition}</div>
                }
                <img className="hoverPointer" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" height="30px"
                    style={{
                        position: 'absolute', left: '-30px', transform: 'rotate(180deg)'
                    }}
                    onClick={() => { changeCard('left') }}
                />
                <img className="hoverPointer" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" height="30px"
                    style={{
                        position: 'absolute', right: '-30px'
                    }}
                    onClick={(event) => {
                        event.stopPropagation();
                        changeCard('right') }}
                />

            </div>
            <div className="flexContainer">
            <button className="widgetButtons" onClick={()=>{
                changeCount(-5)
                changeCard('right')
            }}>Keep Learning</button>
            <button className="widgetButtons" onClick={()=>{
                changeCount(50)
                changeCard('right')
            }}>Memorized</button>
            <button className="widgetButtons" onClick={()=>{
                    setView('addNewCard')
                }}>Add New Card</button>
            </div>

            <div className="flexContainerCol">
                
                {view === 'addNewCard' && 
                <>
                <br/>
                <span>Term:</span>
                <br/>
                <textarea rows='5' cols='40' onChange={(e)=>{
                    setNewTerm(e.target.value)
                }} value={newTerm}></textarea>
                <br/>
                <span>Definition:</span>
                <br/>
                <textarea rows='5' cols='40'  onChange={(e)=>{
                    setNewDefinition(e.target.value)
                }} value={newDefinition}></textarea>
                <button className="widgetButtons" onClick={()=>{
                    addNewCard()
                    setView('flashcard')
                }}>Submit</button>
                </>
                }
                
            </div>
        </div>
    )
}