import React from "react";
import Form from "bootstrap/Form";
import Row from "bootstrap/Row";
import Col from "bootstrap/Col";
import axios from "axios";
export default class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.deleteCategory = this.deleteCategory.bind(this);
    }
    deleteCategory() {
        axios
            .deleteCategory(
                "http://localhost:8000/api/category" + this.props.obj.id
            )
            .then((res) => {
                console.log("Category deleted successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <link
                        className="edit-link"
                        to={"/edit/category" + this.props.obj.id}
                    >
                        <button size="sm" variant="info">
                            Edit
                        </button>
                    </link>
                    <button
                        onClick={this.deleteCategory}
                        size="sm "
                        variant="danger"
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}
