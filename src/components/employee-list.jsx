import React from "react";
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

export default function EmployeeList(props) {
    const employee = useSelector((state)=>state.employee.list).slice();

    const [sortBy, setSortBy] = React.useState('firstName')
    const [direction, setDirection] = React.useState('asc')
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
    /**
     * When the user clicks on a page number, set the page number to the new page number.
     * @param {*} event 
     * @param {number} newPage 
    */
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    /**
     * When the user changes the number of rows per page, set the number of rows per page to the new
     * value and set the page to 0.
     * @param {*} event 
     */
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    /**
     * If the direction is ascending, set the direction to descending, otherwise set the direction to
     * ascending.
     * @param {string} name 
     */
    function triAscendant(name) {
        setSortBy(name)
        if(direction === 'asc') {
            setDirection("desc")
        } else {
            setDirection("asc")
        }
    }

    return (
        <section className="employee-list-container">
            <h2>Current Employees</h2>
            <TableContainer className="table-container">
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("firstName")}>firstName</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("lastName")}>lastName</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("dateOfBirth")}>dateOfBirth</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("startDate")}>startDate</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("department")}>department</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("street")}>street</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("city")}>city</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("state")}>state</TableSortLabel>
                            </TableCell>
                            <TableCell padding="checkbox">
                                <TableSortLabel direction={direction} active="true" onClick={() => triAscendant("zipCode")}>zipCode</TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employee.sort(
                        /**
                         * A sorting function.
                         * @param {string} a 
                         * @param {string} b 
                         * @returns 
                         */
                        function (a, b) {
                            let varA = a[sortBy]
                            let varB = b[sortBy]
                            if (sortBy === "dateOfBirth" || sortBy === "startDate") {
                                varA = new Date(varA).getTime()
                                varB = new Date(varB).getTime()
                            }
                            if (varA < varB) { return direction === 'asc' ? -1 : 1}
                            if (varA > varB) { return direction === 'asc' ? 1 : -1; } 
                            return 0;
                            }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((el) => <TableRow>
                                <TableCell>{el.firstName}</TableCell>
                                <TableCell>{el.lastName}</TableCell>
                                <TableCell>{el.dateOfBirth}</TableCell>
                                <TableCell>{el.startDate}</TableCell>
                                <TableCell>{el.department}</TableCell>
                                <TableCell>{el.street}</TableCell>
                                <TableCell>{el.city}</TableCell>
                                <TableCell>{el.state}</TableCell>
                                <TableCell>{el.zipCode}</TableCell>
                            </TableRow>)}
                    </TableBody>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={employee.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Table>
            </TableContainer>
        </section>
    );
}
