import React, { Component } from "react";
import styles from "./TestingPage.module.css";

class TestingPage extends Component {
  state = {
    name: "",
    title: "",
    organization: "",
    selectedFile: null,
    score: 0,
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
    val5: 0,
    val6: 0,
    val7: 0,
    val8: 0,
    val9: 0,
    val10: 0
  };

  changeValueHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changeNumberValueHandler = event => {
    this.setState({ [event.target.name]: Number(event.target.value) });
  };
  selectImageHandler = event => {
      console.log(event.target.files[0].name)
    // this.setState({ selectedFile: event.target.files[0] });
    // console.log(this.state.selectedFile)
  };

  //   uploadImageHandler = () => {};

  handleSubmit = () => {
    const aggregateScore =
      this.state.val1 +
      this.state.val2 +
      this.state.val3 +
      this.state.val4 +
      this.state.val5 +
      this.state.val6 +
      this.state.val7 +
      this.state.val8 +
      this.state.val9 +
      this.state.val10;
    this.setState({score: aggregateScore});

    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "ilens9wa",
      dataset: "production",
      token: "skc22oiHgTj5u9FyzM7t9n5FM1HFyndCDAsvygxyEQ6vpoAFQJFgbAGTeZIrNJh5VK97TL9Fd701rMIzn9okBw841vPSXhxYW9S6AudNgFISUdA8tKx6Amvf05WJfZFujjsC2c2o1AkbR4IY4HR9Gu3G1F8bsDrLS9muOnfxLqQf7t1twGd9", // or leave blank to be anonymous user
      useCdn: true // `false` if you want to ensure fresh data
    });
    const doc = {
        _type: 'person',
        fullName: this.state.name,
        image: this.state.selectedFile,
        organization: this.state.organization,
        score: this.state.score,
        title: this.state.title
      }
      
      client.create(doc).then(res => {
        console.log(`Employee was created, document ID is ${res._id}`)
      })
  };

  render() {
    return (
      <div className={styles.root}>
        <section className={styles.landing}>
          <p className={styles.heading}>Survey Questions</p>
          <form>
            <div>
              <label htmlFor={styles.name}>
                Your First and Last Name
                <input
                  id={styles.name}
                  name="name"
                  required
                  onChange={() => this.changeValueHandler(event)}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor={styles.title}>
                Your Title
                <input
                  id={styles.title}
                  name="title"
                  required
                  onChange={() => this.changeValueHandler(event)}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor={styles.organization}>
                Company/Organization
                <input
                  id={styles.organization}
                  name="organization"
                  required
                  onChange={() => this.changeValueHandler(event)}
                ></input>
              </label>
            </div>
            <label htmlFor={styles.photo}>
              Upload Your Image
              <input
                type="file"
                id={styles.photo}
                required
                onChange={() => this.selectImageHandler(event)}
              ></input>
            </label>
            {/* <button onClick={this.uploadImageHandler}>Upload Image</button> */}
            <hr className={styles.break} />
            <p className={styles.question}>&bull; I am not a competitive person.</p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val1"
              defaultValue={0}
            >
              <option value="0" disabled>
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>
            <p className={styles.question}>
              &bull; Generally, I enjoy just chatting with others over having serious discussions.
            </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val2"
              defaultValue="0"
            >
              <option value="0" disabled>
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>&bull; I am often the life of the party.</p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val3"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>
              &bull; I hardly ever worry about what might happen in the future.
            </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val4"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>
              &bull; Generally, I prefer watching videos, tv or movies over more physicl activities
              (like walking, hiking or playing a sport).{" "}
            </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val5"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>
              &bull; I enjoy being the focus of attention in social settings. .
            </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val6"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>&bull; Discussing my feelings comes easily to me.</p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val7"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>&bull; I find it difficult to multi-task. </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val8"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>{" "}
            <p className={styles.question}>
              &bull; I don't mind sharing personal details with people.
            </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val9"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>
            <p className={styles.question}>&bull; I have a very active imagination. </p>
            <select
              onChange={() => this.changeNumberValueHandler(event)}
              required
              name="val10"
              defaultValue="0"
            >
              <option disabled value="0">
                Select an option
              </option>
              <option value="1">1 (strongly disagree)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (strongly agree)</option>
            </select>
            <button type="submit" onClick={this.handleSubmit}>
              CLICK
            </button>
          </form>
        </section>
      </div>
    );
  }
}
export default TestingPage;
