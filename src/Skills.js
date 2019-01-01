import React from "react";

function Skill({ skill }) {
  return (
    <div className="item" key={skill.id}>
      <div className="listItem">{skill.name} </div>
    </div>
  );
}

function InputSkill({ newSkill, submitHandler, changeHandler }) {
  return (
    <div className="item">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={newSkill}
          className="skillBox"
          onChange={changeHandler}
          placeholder="kirjoita mitä olet oppinut..."
        />
      </form>
    </div>
  );
}

function Skills({ skills, show, submitHandler, changeHandler, newSkill }) {
  // console.log("courses", courses);
  if (show) {
    return (
      <div className="skills">
        <h2> Olen oppinut seuraavia asioita: </h2>
        <div className="container">
          <InputSkill
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            newSkill={newSkill}
          />
          {skills.map(skill => (
            <Skill skill={skill} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Skills;
