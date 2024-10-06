import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const paginationModel = { page: 0, pageSize: 10 };


const Datatable = () => {

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 150, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to={`/users/${userRows[1].id}`}><button id="editButton" className="editButton"></button></Link>
                        
                        <label htmlFor="editButton" className='border-2 border-purple-400 border-dotted bg-purple-50 cursor-pointer p-2 rounded'>Edit</label>
                        <button className="deleteButton border-none outline-none mr-3"></button>
                        <label htmlFor="editButton" className='border-red-200 border-2 border-dotted bg-red-100 cursor-pointer h-2 p-2 rounded-full'>Delete</label>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='datatable'>
            <div className=''>
                Add New User
                <Link to="/users/new"><button className="addButton bg-blue-50">+Add User</button></Link>
            </div>
            <Paper>
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[10, 15]}
                    checkboxSelection
                    sx={{ border: 0, height: 650, width: 'auto' }}
                />
            </Paper>
        </div>
    )
}

export default Datatable