import React from 'react';
import { useSelector } from 'react-redux';
import './table.css'

function Table() {

    const allData = useSelector((state) => state)


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
                    <td><button className="innerbtn">Update</button></td>
                    <td><button className="innerbtn">Delete</button></td>
                </tr>)}



                {allData.data.map((e) => {
                    <td>e.firstname</td>
                })}
            </tbody>


        </table>
    </div>;
}

export default Table;
