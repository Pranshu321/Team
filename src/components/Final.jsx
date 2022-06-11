import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(TeamA, TeamB, Matchtype, TournamentName, StartDate, EndTime, MatchLocation, Comments) {
    return { TeamA, TeamB, Matchtype, TournamentName, StartDate, EndTime, MatchLocation, Comments };
}

export default function Final(props) {
    const rows = [
        createData(props.TeamA, props.TeamB, props.type,props.name,props.start,props.end,props.location,props.Comments),

    ];
    return (
        <div style={{ width: "90%", margin: "278px 71px" }}>
            <h1>Final Details Preview</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Team 1</TableCell>
                            <TableCell>Team 2</TableCell>
                            <TableCell align="right">Match Type</TableCell>
                            <TableCell align="right">Tournament Name&nbsp;</TableCell>
                            <TableCell align="right">Start Date&nbsp;</TableCell>
                            <TableCell align="right">End Date&nbsp;</TableCell>
                            <TableCell align="right">Match Location&nbsp;</TableCell>
                            <TableCell align="right">Comments&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.TeamA}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.TeamB}
                                </TableCell>
                                <TableCell align="right">{row.Matchtype}</TableCell>
                                <TableCell align="right">{row.TournamentName}</TableCell>
                                <TableCell align="right">{row.StartDate}</TableCell>
                                <TableCell align="right">{row.EndTime}</TableCell>
                                <TableCell align="right">{row.MatchLocation}</TableCell>
                                <TableCell align="right">{row.Comments}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
