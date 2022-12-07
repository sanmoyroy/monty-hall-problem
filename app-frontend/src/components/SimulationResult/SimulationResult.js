import './SimulationResult.css';
import PropTypes from 'prop-types';

function SimulationResult({ data }) {
    return (
        { data } && <div className='simulation-results'>
            <label htmlFor='total-wins' className='total-wins-label'>Total Wins :</label>
            <div className='total-wins'>{data.totalWins}</div>
            <table className='game-results'>
                <thead>
                    <tr>
                        <th>Game ID</th>
                        <th>Game Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.results.map((result) => (
                        <tr key={result.gameId}>
                            <td>{result.gameId}</td>
                            <td>{result.gameResult}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

SimulationResult.propTypes = {
    data: PropTypes.object.isRequired
}

export default SimulationResult;