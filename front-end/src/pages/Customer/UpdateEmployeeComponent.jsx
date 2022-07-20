import React, {Component} from "react";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h2>Manage <b>Employees</b></h2>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i
                                            className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                        <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i
                                            className="material-icons">&#xE15C;</i> <span>Delete</span></a>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
								<span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                                        <label htmlFor="checkbox1"></label>
								</span>
                                    </td>
                                    <td>Thomas Hardy</td>
                                    <td>thomashardy@mail.com</td>
                                    <td>89 Chiaroscuro Rd, Portland, USA</td>
                                    <td>(171) 555-2222</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip"
                                            title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
								<span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox2" name="options[]" value="1"></input>
									<label htmlFor="checkbox2"></label>
								</span>
                                    </td>
                                    <td>Dominique Perrier</td>
                                    <td>dominiqueperrier@mail.com</td>
                                    <td>Obere Str. 57, Berlin, Germany</td>
                                    <td>(313) 555-5735</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip"
                                            title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
								<span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox3" name="options[]" value="1"></input>
									<label htmlFor="checkbox3"></label>
								</span>
                                    </td>
                                    <td>Maria Anders</td>
                                    <td>mariaanders@mail.com</td>
                                    <td>25, rue Lauriston, Paris, France</td>
                                    <td>(503) 555-9931</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip"
                                            title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox4" name="options[]" value="1"></input>
									<label htmlFor="checkbox4"></label>
								</span>
                                    </td>
                                    <td>Fran Wilson</td>
                                    <td>franwilson@mail.com</td>
                                    <td>C/ Araquil, 67, Madrid, Spain</td>
                                    <td>(204) 619-5731</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip"
                                            title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
								<span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox5" name="options[]" value="1"></input>
									<label htmlFor="checkbox5"></label>
								</span>
                                    </td>
                                    <td>Martin Blank</td>
                                    <td>martinblank@mail.com</td>
                                    <td>Via Monte Bianco 34, Turin, Italy</td>
                                    <td>(480) 631-2097</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip"
                                            title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i
                                            className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div id="addEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Employee</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal"
                                           value="Cancel"></input>
                                    <input type="submit" className="btn btn-success" value="Add"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div id="editEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Employee</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" required></input>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal"
                                           value="Cancel"></input>
                                    <input type="submit" className="btn btn-info" value="Save"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div id="deleteEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Employee</h4>
                                    <button type="button" className="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete these Records?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal"
                                           value="Cancel"></input>
                                    <input type="submit" className="btn btn-danger" value="Delete"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
}

export default (UpdateEmployeeComponent)

