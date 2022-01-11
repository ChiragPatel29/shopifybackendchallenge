import React, {Component} from 'react';
import Result from "./Result";
import AddItem from "./AddItem";
import CsvDownload from 'react-json-to-csv'

export default function Table() {

    return <React.Fragment>
        <AddItem></AddItem>
        <table className="table" id="myTable">
            <thead>
            <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Location</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <Result></Result>
            </tbody>
        </table>
    </React.Fragment>;

}