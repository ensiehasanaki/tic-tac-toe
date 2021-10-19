/* eslint-disable react/no-array-index-key */
// کد یه مشکلی داره که یهو اگه دلش بخاد وقتی چندبار رویه خونه میزنی عددشو عوض میکنه وقتی تمام خونه ها پر میشن
import { useState } from "react";

function TicTakToe() {
    const [playerNumber, setPlayerNumber] = useState("1");
    const [state, setState] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
    const change = (row: number, col: number, pNum: number) => {
        setState((oldState) => {
            const player = () => setPlayerNumber(pNum);
            const newState = oldState.map((iing) => iing.map((jing) => jing));
            if (oldState[row][col] === 1 || oldState[row][col] === 2) {
                player();
                return newState;
            }

            newState[row][col] = pNum;
            return newState;
        });
    };
    return (
        <>
            <div>player number: {playerNumber}</div>
            <table>
                <tbody>
                    {state.map((row, i) => (
                        <tr key={`${i}i`}>
                            {row.map((value, j) => (
                                <td key={`${i}${j}`}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            change(i, j, playerNumber);
                                            setPlayerNumber((prev) =>
                                                prev === 2 ? 1 : 2
                                            );
                                        }}
                                    >
                                        {value}
                                    </button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TicTakToe;
