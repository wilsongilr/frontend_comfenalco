import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import uuid from 'react-uuid';
import Swal from 'sweetalert2';
import '../style.css'
const RegisterEmployee = () => {

    const [tasks, setTasks] = useState([]);
    const [edit, setEdit] = useState(false);
    const [employeeData, setEmployeeData] = useState({ identification: '', fullname: '', post: '', email: '', })

    const addTask = () => {
        const task = {
            id: uuid(),
            identification: employeeData.identification,
            fullname: employeeData.fullname,
            post: employeeData.post,
            email: employeeData.email,
        };
        setTasks([...tasks, task]);
        clearForm();
    }

    const updateTask = () => {
        const id = localStorage.getItem("id");
        const newTaskedit = { id, identification: employeeData.identification, fullname: employeeData.fullname, post: employeeData.post, email: employeeData.email };
        const newTasks = tasks.map(task => task.id === id ? newTaskedit : task);
        setTasks(newTasks);
        clearForm();
    }



    const actions = (e) => {
        e.preventDefault();
        edit ? updateTask() : addTask();

    }

    const deleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const newTasks = tasks.filter(task => task.id !== id);
                setTasks(newTasks);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });

    }

    const clearForm = () => {
        setEmployeeData({ identification: '', fullname: '', post: '', email: '' })
        setEdit(false);
        localStorage.removeItem("id");
    }
    const getTask = (data) => {
        localStorage.setItem("id", data.id);
        setEmployeeData({ identification: data.identification, fullname: data.fullname, post: data.post, email: data.email })
        setEdit(true);
    }


    return (
        <div className='container'>
            <div className="mt-5 justify-content-center d-flex">
                <div className='col-6'>
                    <div className="card formulario">
                        <h3 className='card-title text-center text-danger mt-3'>REGISTER EMPLOYEE</h3>
                        <div className="card-body">
                            <form onSubmit={actions}>
                                <div className="mb-3">
                                    <input type="text"
                                        placeholder='Identification'
                                        // value={title}
                                        value={employeeData.identification}
                                        required
                                        autoFocus
                                        className='form-control'
                                        // onChange={(e) => setTitle(e.target.value)}
                                        onChange={(e) => setEmployeeData({ ...employeeData, identification: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="text"
                                        placeholder='Full Name'
                                        // value={description}
                                        value={employeeData.fullname}
                                        required
                                        className='form-control'
                                        // onChange={(e) => setDescription(e.target.value)}
                                        onChange={(e) => setEmployeeData({ ...employeeData, fullname: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="text"
                                        placeholder='Post'
                                        // value={description}
                                        value={employeeData.post}
                                        required
                                        className='form-control'
                                        // onChange={(e) => setDescription(e.target.value)}
                                        onChange={(e) => setEmployeeData({ ...employeeData, post: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="email"
                                        placeholder='Email'
                                        // value={description}
                                        value={employeeData.email}
                                        required
                                        className='form-control'
                                        // onChange={(e) => setDescription(e.target.value)}
                                        onChange={(e) => setEmployeeData({ ...employeeData, email: e.target.value })}
                                    />
                                </div>
                                <div className='btn-group d-flex justify-content-center'>
                                    <button type='submit' className="btn btn-danger">SAVE</button>
                                    <button className='btn btn-info' onClick={() => clearForm()}>CANCELAR</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* List Tasks */}
            <div className='container d-flex justify-content-center'>
                <div className='col-12 col-md-6'>
                    {/* <ul className="mt-3 list-group list-group-numbered">
                        {tasks.map((employee) => (
                            <li key={employee.id} className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{employee.identification}</div>
                                    <div className='me-2 text-danger text-capitalize'>{employee.fullname}</div>

                                    {employee.post}
                                    {employee.email}
                                </div>

                                <button onClick={() => deleteTask(employee.id)} className='btn btn-danger me-2'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                {/* opcion 1 para editar */}
                    {/* <button onClick={() => getTask(item.id)} className='btn btn-info'> */}
                    {/* opcion 2 mejorada para editar 
                                <button onClick={() => getTask(employee)} className='btn btn-info'>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </button>

                            </li>
                        ))}
                    </ul> */}
                    <div className="list-group mt-5">
                        {tasks.map((employee) => (
                            <div key={employee.id} className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="text-capitalize mb-1">{employee.fullname}</h5>
                                    <small className="text-body-secondary">{employee.identification}</small>
                                </div>
                                <p className="mb-1">{employee.post}</p>
                                <small className="text-body-secondary">{employee.email}</small>
                                <div className='mt-2 d-flex justify-content-end' >
                                    <button onClick={() => deleteTask(employee.id)} className='btn btn-danger me-2'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button onClick={() => getTask(employee)} className='btn btn-info'>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

            </div>



        </div>
    )
}
export default RegisterEmployee