import {useState} from 'react';
function Square({value,onSquareclick}){
 return (
    <button className="square" onClick={onSquareclick}>{value}</button> )
}


export default function Board(){
    const [xIsNext,setXIsNext]=useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleclick(i){
        const nextSquare=squares.slice();
        if (xIsNext){
        nextSquare[i]="X";
        }
        else{
        nextSquare[i]="0";
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
      };
    return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareclick={()=>handleclick(0)} />
        <Square value={squares[1]} onSquareclick={()=>handleclick(1)} />
        <Square value={squares[2]} onSquareclick={()=>handleclick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareclick={()=>handleclick(3)} />
        <Square value={squares[4]} onSquareclick={()=>handleclick(4)} />
        <Square value={squares[5]} onSquareclick={()=>handleclick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareclick={()=>handleclick(6)} />
        <Square value={squares[7]} onSquareclick={()=>handleclick(7)} />
        <Square value={squares[8]} onSquareclick={()=>handleclick(8)} />
      </div>
    </>
  );
}