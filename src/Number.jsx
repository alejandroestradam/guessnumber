import React from 'react';

const Number = () => {
    const [number,setNumber] = React.useState(0);
    const [computerNumber, setcomputerNumber] = React.useState(0);
    const [counter, setCounter] = React.useState(3);
    const [clue, setClue] = React.useState('');

    React.useEffect(()=>{
        setcomputerNumber(Math.floor(Math.random() * 30));
    },[]);
    React.useEffect(()=>{
        if(counter === 0){
            alert('Sorry, you have lost :(');
            window.location.reload(true);
        }
    },[counter]);

    function saveNumber(e){
            setNumber(e.target.value);
    }
    function guess(){
        console.log('computer number:', computerNumber);
        console.log('guess number', number);
        console.log(computerNumber=== number);
        
        if(parseInt(number) === computerNumber){
            alert('Congratulations! You have won');
            window.location.reload(true);
        }else if(parseInt(number) > computerNumber){
            setClue('The number is less than  ' + number);
        }else if(parseInt(number) < computerNumber){
            setClue('The number is greater than  ' + number);
        }
        setCounter(counter - 1);
    }

  return (
    <div className='guess'>
        <p className='oportunities'>Oportunities left: {counter}</p>
        <p className='number'>{number}</p>
        <p className='clue'>{clue}</p>
        <input className='input-number' type="number" placeholder='Write the number'value={number} onChange={saveNumber}/>
        <button className='btn-guess' id='btn-guess' onClick={guess}>Do the guess</button>
    </div>
  )
}

export default Number;