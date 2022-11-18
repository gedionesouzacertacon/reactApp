import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';

import styles from './App.module.css'

import './global.css';
import { Sidebar } from './components/Sidebar.jsx';

export function App() {
  return (
  <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
          <Post 
            author="Gedione Souza" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius ut praesentium veritatis tenetur possimus ipsam sit eveniet porro dolor unde consequatur dolorem quod fuga, odio harum tempora iste qui." 
          />
          <Post 
            author="Gabriel Araujo" 
            content="Uma nova postagem" 
          />
      </main>
    </div>
  </div>
  )
}
