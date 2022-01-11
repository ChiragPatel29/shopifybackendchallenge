import React, {Component} from 'react';
import axios from 'axios';
import {CSVLink} from "react-csv";

const Item = props => (
    <tr>
        <th scope="row">{props.item.itemname}</th>
        <td>{props.item.price}</td>
        <td>{props.item.quantity}</td>
        <td>{props.item.location}</td>
        <td><a href={`\\edit\\${props.item._id}`}>Edit</a></td>
        <td>
            <button type="button" className="btn btn-danger float-right" onClick={() => {
                props.deleteExercise(props.item._id)
            }}>Done
            </button>
        </td>
    </tr>
)

export default class Result extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this)
        this.updateExercise = this.updateExercise.bind(this)
        this.state = {
            items: [],
            loaded: false
        };
    }

    componentDidMount() {
        axios.get('https://shopifybackendapi.herokuapp.com/inventory/items')
            .then(response => {
                this.setState({
                    items: response.data,
                    loaded: true
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        axios.delete('https://shopifybackendapi.herokuapp.com/inventory/delete/' + id)
            .then(response => {
                console.log(response.data)
            });

        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }


    updateExercise(id) {
        let item = this.state.items.filter(el => el._id == id)

    }


    itemList() {
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} deleteExercise={this.deleteExercise}
                             key={currentitem._id}/>;
        })
    }

    render() {
        let content = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
        if (this.state.loaded == true) {
            content = (
                <React.Fragment>
                    {this.itemList()}
                    <button type="button" className="btn btn-secondary"><CSVLink data={this.state.items}
                                                                                 filename={"productdata.csv"}>Export
                        Product Data To A CSV</CSVLink></button>


                </React.Fragment>
            )
        }

        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        )
    }
}
