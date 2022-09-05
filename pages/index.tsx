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

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title:purpose,
        description: description
      }
    ]);
    setPurpose('');
    setDescription('');
  }

  const purposeChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
    setPurpose(e.target.value);
  }
  const descriptionChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    setDescription(e.target.value);
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
      <input type ="submit" className={styles.submit} value="追加"/>
    </form>
      {
        todos.map((todo ,index) => (
        <article className={styles.todo} key={index}> 
          <h1 className={styles.title}>{todo.title}</h1>
          <p className={styles.description}>{todo.description}</p>
          <div className={styles.actions}>
            <button className={styles.editButton}>編集</button>
            <button onClick ={ () => {deleteTodo(index)}} className={styles.deleteButton}>削除</button>
          </div>
        </article>
        ))
      }
    </>
    );
}

export default Home
