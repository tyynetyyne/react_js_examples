import React from "react";
import "./styles.css";
import NameAndAddress from "./NameAndAddress";
import ToggleButton from "./ToggleButton";
import Courses from "./Courses";
import Skills from "./Skills";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tiina Partanen",
      email: "tiina.s.partanen@tampere.fi",
      link: "https://www.linkedin.com/in/tiina-partanen-2078852/",
      show: [true, true, true], // jokaiselle harjoitukselle omansa
      courses: [
        {
          name: "JavaScript",
          instructor: "Tiina Partanen",
          location: "K240",
          id: 0
        },
        {
          name: "Java",
          instructor: "Eerikki Maula",
          location: "K241",
          id: 1
        }
      ],
      skills: [
        {
          name: "HTML ja CSS",
          id: this.newId()
        },
        { name: "PHP", id: this.newId() }
      ],
      newSkill: ""
    };
  }
  handleClick(numberOfButton) {
    var newShow = [...this.state.show];
    newShow[numberOfButton] = this.state.show[numberOfButton] ? false : true;
    this.setState({ show: newShow });
  }

  newId() {
    return Math.floor(10000000 * Math.random());
  }

  handleChange = field => {
    return event => this.setState({ [field]: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      skills: this.state.skills.concat({
        name: this.state.newSkill,
        id: this.newId()
      }),
      newSkill: ""
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ensimmäinen harjoitus</h1>
        <NameAndAddress
          name={this.state.name}
          email={this.state.email}
          show={this.state.show[0]}
          link={this.state.link}
        />
        <ToggleButton
          show={this.state.show[0]}
          clickHandler={this.handleClick.bind(this)}
          buttonNumber={0}
        />
        <h1>Toinen harjoitus</h1>
        <Courses show={this.state.show[1]} courses={this.state.courses} />
        <ToggleButton
          show={this.state.show[1]}
          clickHandler={this.handleClick.bind(this)}
          buttonNumber={1}
        />
        <h1>Kolmas harjoitus </h1>
        <Skills
          show={this.state.show[2]}
          skills={this.state.skills}
          submitHandler={this.handleSubmit.bind(this)}
          changeHandler={this.handleChange("newSkill")}
          newSkill={this.state.newSkill}
        />
        <ToggleButton
          show={this.state.show[2]}
          clickHandler={this.handleClick.bind(this)}
          buttonNumber={2}
        />
      </div>
    );
  }
}

export default App;
