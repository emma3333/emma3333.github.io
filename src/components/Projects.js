import React from 'react'

class Projects extends React.Component {

  constructor() {
    super()

    this.state = {
      active: '4',
      projects: [
        {
          id: '1',
          title: 'Project One: Space Invaders',
          tech: 'JavaScript | HTML5 | CSS3 | HTML Audio | Git | GitHub',
          text: 'The first project I made at General Assembly was a solo project and our brief was to build a grid-based interactive game in a week using Vanilla JavaScript. I decided to build the classic arcade game Space Invaders by rendering a grid in the browser, writing the logic for winning and losing the game, using JavaScript to manipulate the DOM, and displaying the player\'s score at the end of the game. This project really helped improve my understanding of arrays and set intervals in particular.',
          image: 'https://i.imgur.com/Lmtlzsg.png',
          repo: 'https://github.com/emma3333/SEI-Project-01',
          site: 'https://emma3333.github.io/SEI-Project-01/'
        },
        {
          id: '2',
          title: 'Project Two: Reacathon',
          tech: 'JavaScript | React.js | Axios | SCSS | HTML | Bulma | Webpack | Git | GitHub',
          text: 'The second project at GA was a two day hackathon in a group of three to build a React application that consumes a public API. We used the Deezer API to enable us to make an application where a user can search by artist or title and then play tracks by that artist. The app consisted of a mixture of classical and functional components and included a router with several pages. The entire project was coded on one laptop in the group of 3.',
          image: 'https://i.imgur.com/lxEehOC.png',
          repo: 'https://github.com/emma3333/SEI-Project-02',
          site: 'https://emma3333.github.io/SEI-Project-02/#/'
        },
        {
          id: '3',
          title: 'Project Three: Project Black',
          tech: 'JavaScript | React.js | MongoDB | Mongoose | Express | Axios | SCSS | Bulma | Node.js | GitHub | Webpack | Git',
          text: 'For the third project at GA, our brief was to build a full-stack application in a week, by making our own back end, using an Express API to serve data from a Mongo database, with the ability to consume our API with a separate front end built with React which was then deployed through Heroku. The concept behind the project was to make an online destination for vinyl lovers who could view information about particular LPs, add their favourite LPs to their wishlist and to the application, and communicate with one another via comments.',
          image: 'https://i.imgur.com/Z5uMfVK.jpg',
          repo: 'https://github.com/emma3333/SEI-Project-3',
          site: 'https://sei-project-3.herokuapp.com/#/'
        },
        {
          id: '4',
          title: 'Project Four: Wild Swimming',
          tech: 'JavaScript | React | Webpack | AJAX | Python | Flask | PostgreSQL | HTML | Bulma | SCSS | GitHub | Axios | Git',
          text: 'Inspired by my love of swimming outdoors, I decided to base my final project at GA on wild swimming places across the UK. The brief was to create a full-stack application by making my own back end using a Python Flask API with a Postgres database, and a front end built with React. The application had to enable a user to register, login and add content. I also used React-mapbox-gl and Dark Sky APIs in addition to my own to enhance the application.',
          image: 'https://i.imgur.com/exbU0J0.png',
          repo: 'https://github.com/emma3333/SEI-Project-04',
          site: 'https://wild-swimming.herokuapp.com/#/'
        }
      ]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ active: e.target.id })
    console.log(e.target.id)
  }

  filterProjects(){
    const filterProjects = this.state.projects.filter(project => project.id === this.state.active)
    return filterProjects
  }


  render() {
    console.log(this.state.projects)
    return (
      <section id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-images">
            {this.state.projects.map((project) =>
              <div className="images" key={project.id}>
                <img src={project.image} alt="Project screenshot" onClick={this.handleClick} id={project.id}/>
                <div className="text-block"><p>{project.title}</p></div>
              </div>
            )}
          </div>

          <div className="project-content">
            {this.filterProjects().map(project =>
              <div id={project.id} key={project.id}>
                <h4 className="">{project.title}</h4>
                <h5>{project.tech}</h5>
                <p className="">{project.text}</p>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">Project Readme</a>
                <a href={project.site} target="_blank" rel="noopener noreferrer">Project Site</a>
              </div>
            )}
          </div>

        </div>
      </section>
    )
  }
}



export default Projects
