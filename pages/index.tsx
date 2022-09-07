import type { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react';
import styles  from '../styles/Home.module.css';

type Todo = {
  title: string,
  description: string,
};

const Home: NextPage = () => {
  const [todos,setTodos] = useState<Todo[]>([
 ]);
  const [purpose, setPurpose] = useState<string>('');
  const [description,setDescription] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>(-1);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (editIndex === -1) {
      setTodos([
        ...todos,
        {
          title:purpose,
          description: description
        }
      ]);
      setPurpose('');
      setDescription('');
      return;
    }
    const tmpTodos = todos;
    tmpTodos[editIndex].title = purpose;
    tmpTodos[editIndex].description = description;
    setTodos(tmpTodos);
    setPurpose('');
    setDescription('');
    setEditIndex(-1);
  }

  const purposeChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
    setPurpose(e.target.value);
  }
  const descriptionChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(e.target.value);
  }

  const editTodo = (editIndex: number) => {
    setPurpose(todos[editIndex].title);
    setDescription(todos[editIndex].description);
    setEditIndex(editIndex);
  }

  const deleteTodo = (deleteIndex:number) =>{
    setTodos(
      todos.filter((todo,index) => index !== deleteIndex)
    );
  }

  // keyは必須
  return (
    <>
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.inputForm}>
      <label className={styles.label}>目標</label>
      <input type="text" className={styles.input} onChange={purposeChangeHandler} value={purpose}></input>
      </div>
      <div className={styles.inputForm}>
      <label className={styles.label}>説明</label>
      <textarea name="" className={styles.input} onChange={descriptionChangeHandler} value={description}></textarea>
      </div>
      <input type ="submit" className={styles.submit} value={editIndex == -1 ? "追加":'更新'}/>
    </form>
      {
        todos.map((todo ,index) => (
        <article className={styles.todo} key={index}> 
          <h1 className={styles.title}>{todo.title}</h1>
          <p className={styles.description}>{todo.description}</p>
          <div className={styles.actions}>
            <button onClick={ () => { editTodo(index) }} className={styles.editButton}>編集</button>
            <button onClick={ () => {deleteTodo(index)}} className={styles.deleteButton}>削除</button>
          </div>
        </article>
        ))
      }
    </>
    );
}

export default Home
