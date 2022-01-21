import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteData, updateData } from "../Redux/Action/Action"

import './table.css'


import Data from "./Data"
import { Routes, Route } from 'react-router-dom';

function Table() {

    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    function onDelete(id) {

        //    const newData=data.filter(e=> e.id!==id)
        dispatch(deleteData(id))
    }

    function onUpdate(id) {
        console.log('before', id);
        <Routes><Route path="/data" element={<Data />} /></Routes>
        // dispatch(updateData(id))
    }

    const allData = useSelector((state) => state)
    //console.log(allData);

    return <div>
        <table>
            <thead>

                <tr>
                    <th>fist name</th>
                    <th>last name</th>
                    <th>Email</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>

                {allData.data.map((element, id) => <tr key={id}>
                    <td>{element.firstname}</td>
                    <td>{element.lastName}</td>
                    <td>{element.email}</td>
                    

                    <td><button onClick={() => { onUpdate(element.id) }} className="innerbtn">Update</button></td>
                    <td><button onClick={() => { onDelete(element.id) }} className="innerbtn">Delete</button></td>
                </tr>)}




            </tbody>


        </table>
    </div>;
}

export default Table;
