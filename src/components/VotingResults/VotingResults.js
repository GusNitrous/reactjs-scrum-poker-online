import React from "react";

export const VotingResults = ({data}) => {
    return <div>
        <h3>Voting Results</h3>
        <ul>
            <li>Avg: {data.avg}</li>
            <li>Max: {data.max}</li>
            <li>Min: {data.min}</li>
        </ul>
    </div>
}
