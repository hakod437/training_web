import imagecard from '../../assets/images/illustration-article.svg'
import avatar from '../../assets/images/image-avatar.webp'
import './App.css'

function App() {

  return (
    <div className="hero">
        <img src={imagecard} className="hero-image" alt="Illustration article" />
      <div className="hero-content">
        <p className="hero-tag">Learning</p>
        <p className="hero-date">Published 21 Dec 2023</p>
        <h1 className="title">HTML & CSS foundations</h1>
        <p className="description">These languages are the backbone of every website, defining structure and styling, content, and presentation</p>
        <div className="author">
          <img src={avatar} className="hero-avatar" alt="Greg Hooper" />
          <p className="author-name">Greg Hooper</p>
        </div>
      </div>
    </div>
  )
  

}


export default App
