import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Todo() {
    const [newtodo, setNewtodo] = useState("Ajouter l'étape à faire");
    const [todos, setTodos] = useState([]);
    const handlNewTodoChange = (e) => {
        e.preventDefault();
        setNewtodo(e.target.value);
    }
    const handleNewTodos = (e) => {
        e.preventDefault();
        if (newtodo === "") return;
        setTodos([...todos, { id: Date.now(), text: newtodo }]);
        setNewtodo("");
    }
    const remove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const update = (id, text) => {
        todos.map(item => {
            if (item.id === id) {
                item.text = text;
            }

        })
    };
    return (
        <div>
            <h4><FontAwesomeIcon icon={faHome} style={{ color: 'red' }} />
                     Préparation d'un gâteau au chocolat</h4>
            <form>
                <div className="mydiv">
                    <label class="sr-only" for="inlineFormInputGroupUsername">Tache</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-tasks" aria-hidden="true"></i></div>
                        </div>
                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" value={newtodo} onChange={handlNewTodoChange}></input><br />
                    </div>
                    <button type="button" className="btn btn-primary  btn-lg btn-block mybt" onClick={handleNewTodos}>Ajouter la tache</button>
                </div>
                <h4>Listes des taches</h4>
                <div className="mydiv2">


                    <ul className="mylist">
                        {todos.map((todo) => {
                            return <li class="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                                <input type="text" value={todo.text} />
                                <a href="#" onClick={() => update(todo.id, todo.text)}><FontAwesomeIcon icon={faPen} style={{ color: 'green' }}></FontAwesomeIcon>
                                    <i class="fas fa-edit"></i></a>

                                <a href="#" onClick={() => remove(todo.id)}>
                                    <span className="mx-2 text-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </span></a>
                            </li>
                        })}

                        {/* <li>Tamiser les ingrédients secs ensemble</li><button>X</button>
               <li>Versez les ingrédients liquides et remuez le tout soigneusement.</li>
               <li>Versez le mélange dans un moule rond de 20 cm de diamètre, beurré et fariné.</li>
               <li>Faites cuire à 175°C pendant 30 minutes.</li>
               <li>Laissez le gâteau refroidir pendant 5 minutes.</li>
               </ul> */}
                    </ul>

                </div>

            </form>
        </div>
    )
}
