import React, { useState, useEFfect, startTransition, useEffect } from 'react';
const axios = require('axios');

export default function Flashcard() {

    const [view, setView] = useState('flashcard')
    const [wordBankIndex, setWordBankIndex] = useState(0);
    const [wordBank, setWordBank] = useState([{ word: 'add words to your collection', definition: 'and they will show up here' }, { word: 'here is another sample word', definition: 'and a sample definition (adding cards will delete this)' }])
    const [side, setSide] = useState('front');
    const [defaultSide, setDefaultSide] = useState('front');
    const [newTerm, setNewTerm] = useState('');
    const [newDefinition, setNewDefinition] = useState('');

    useEffect(() => {
        axios.get('/flashcards')
            .then((response) => {
                if (response.data.length === 0) {
                    setWordBank([{ word: 'add words to your collection', definition: 'and they will show up here' }])
                } else {
                    let sortedByStudyCount = response.data.sort((a, b) => a.studyCount - b.studyCount)
                    setWordBank(sortedByStudyCount);
                }
            });
    }, []);

    const addNewCard = () => {
        let term = newTerm
        let definition = newDefinition
        if (term.includes('"') || definition.includes('"')) {
            for (let i = 0; i < term.length; i++) {
                if (term[i] === '"') {
                    term = term.slice(0, i) + "''" + term.slice(i + 1);
                }
            }
            for (let i = 0; i < definition.length; i++) {
                if (definition[i] === '"') {
                    definition = definition.slice(0, i) + "''" + definition.slice(i + 1);
                }
            }
        }
        let newCard = {
            word: term,
            definition: definition,
            studyCount: 0
        }
        setNewDefinition('')
        setNewTerm('')
        axios.post('/flashcards', newCard)
            .then((response) => {
                let newTermWithMetaData = { ...newCard, ...response.data }
                let newWordBank = [...wordBank]
                newWordBank.push(newTermWithMetaData);
                newWordBank.sort((a, b) => a.studyCount - b.studyCount)
                setWordBank(newWordBank);
            })
    }

    const changeCard = (click) => {
        changeCount(1);
        setSide(defaultSide);
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
        }).then(res => {
            console.log(res.data)
            // setWordBank(res.data)
        })
    }

    const interpretSpecialCharacters = (content) => {
        let paragraphs = content.split('\n');
        return <div>
            {paragraphs.map((paragraph) => <p style={{ margin: '0px' }}>{paragraph}</p>)}
        </div>
    }

    const switchSides = () => {
        if (side === 'front') {
            setSide('back');
        } else {
            setSide('front');
        }
    }
    const switchDefaultSides = () => {
        if (defaultSide === 'front') {
            setDefaultSide('back');
            setSide('back')
        } else {
            setDefaultSide('front');
            setSide('front')
        }
    }

    return (
        <div style={{ marginLeft: '50px', marginTop: '50px', marginRight: '50px', width: '500px' }}>
            <div onClick={() => {
                switchSides()
            }} style={{
                height: '300px',
                border: 'solid black 3px', borderRadius: '10px',
                display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'
            }}>
                {side === 'front' ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', margin: 'auto', width: '400px', height: '290px', overflow: 'auto' }}>
                        {interpretSpecialCharacters(wordBank[wordBankIndex].word)}
                    </div>
                    :
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', margin: 'auto', width: '400px', height: '290px', overflow: 'auto'}}>
                        {interpretSpecialCharacters(wordBank[wordBankIndex].definition)}
                    </div>
                }
                <img className="hoverPointer" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" height="50px"
                    style={{
                        position: 'absolute', left: '0px', transform: 'rotate(180deg)'
                    }}
                    onClick={() => { changeCard('left') }}
                />
                <img className="hoverPointer" src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" height="50px"
                    style={{
                        position: 'absolute', right: '0px'
                    }}
                    onClick={(event) => {
                        event.stopPropagation();
                        changeCard('right')
                    }}
                />
            </div>
            <div className="flexContainer">
                <button className="widgetButtons" onClick={() => {
                    changeCount(-5)
                    changeCard('right')
                }}>Keep Learning</button>
                <button className="widgetButtons" onClick={() => {
                    changeCount(50)
                    changeCard('right')
                }}>Memorized</button>
                <button className="widgetButtons" onClick={() => {
                    if (view == 'flashcard') {
                        setView('addNewCard')
                    } else {
                        setView('flashcard')
                    }
                }}>Add New Card</button>
                <button className="widgetButtons" onClick={() => {
                    switchDefaultSides()
                }}>Switch Sides</button>
            </div>
            <div className="flexContainerCol">
                {view === 'addNewCard' &&
                    <>
                        <br />
                        <span>Term:</span>
                        <br />
                        <textarea rows='5' cols='40' onChange={(e) => {
                            setNewTerm(e.target.value)
                        }} value={newTerm}></textarea>
                        <br />
                        <span>Definition:</span>
                        <br />
                        <textarea rows='5' cols='40' onChange={(e) => {
                            setNewDefinition(e.target.value)
                        }} value={newDefinition}></textarea>
                        <button className="widgetButtons" onClick={() => {
                            addNewCard()
                            setView('flashcard')
                        }}>Submit</button>
                    </>
                }
            </div>
        </div>
    )
}