import React, { Component } from "react";
import Form from "react-bootstrap-form";
import Button from "react-bootstrap-button";
import Row from "react-bootstrap-row";
import Col from "react-bootsrap-col";
import axios from "axios";
export default class Createcategory extends component {
    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeCategorydescription =
            this.onChangeCategorydescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            description: "",
        };
    }
    onChangeCategoryName(e) {
        this.setState({ name: e.target.value });
    }
    onChangeCategorydescription(e) {
        this.setState({ description: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const category = {
            name: this.state.name,
            description: this.state.description,
        };
        axios
            .post("http://localhost:8000/api/category", category)
            .then((res) => console.log(res.data));
        //
        $this.setState({ name: "", description: "" });
    }
    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controllId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Controll
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.onChangeCategoryName}
                                ></Form.Controll>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controllId="name">
                                <Form.Label>Description</Form.Label>
                                <Form.Controll
                                    type="text"
                                    value={this.state.description}
                                    onChange={this.onChangeCategorydescription}
                                ></Form.Controll>
                            </Form.Group>
                        </Col>
                    </Row>
                    <button
                        variant="primary"
                        size="lg"
                        block="block"
                        type="submit"
                    >
                        Add
                    </button>
                </Form>
                <br></br>
            </div>
        );
    }
}
