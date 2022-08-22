import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {db} from './util/firebase'
import { collection, getDocs , addDoc, doc , updateDoc} from 'firebase/firestore'

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const userReference = collection(db, "users");

 
  //Example of Reading
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userReference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [])

  //Example of writing
  const createUser = async () => {
    await addDoc(userReference, {name: newName, age: Number(newAge)});
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = {age: age + 1};
    await updateDoc(userDoc,newFields);
  }

  return (
    <div className="App">
      <input placeholder='Name' onChange={(e) => {setNewName(e.target.value)}}/>
      <input placeholder='Age' type='number'  onChange={(e) => {setNewAge(e.target.value)}}/>
      <button onClick={createUser}>Create User</button>
       {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Id: {user.id}</h1>
            <button onClick={() => {updateUser(user.id, user.age)}}>+ Age</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
