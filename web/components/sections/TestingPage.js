import React, { Component } from "react";
import styles from "./TestingPage.module.css";
import sanityClient from "@sanity/client";
import { basename } from "path";
// import { createReadStream } from "fs";

class TestingPage extends Component {
  state = {
    name: "",
    title: "",
    organization: "",
    selectedFile: null,
    imageSrc: null,
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
    const val = event.target.name;
    this.setState({ [event.target.name]: event.target.value });
    setTimeout(() => console.log(this.state), 500);
  };
  changeNumberValueHandler = event => {
    this.setState({ [event.target.name]: Number(event.target.value) })
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
  this.setState({ score: aggregateScore });
  };

  selectImageHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      imageSrc: URL.createObjectURL(event.target.files[0]) //creates browswer rendered http address for image
    });
  };

  uploadImageHandler = () => {};

  sendData = () => {
    const user = this.state.name.replace(/\s+/g, '-').replace(/[^a-zA-Z-]/g, '').toLowerCase() //Converts "Barry S. Rollan" to "barry-s-rollan"
    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "ilens9wa",
      dataset: "production",
      token:
        // "",
        "sk5jdLyEljqSap2H9cSqGksghheLcsYQehRq7uqSraIi2ICgIpOjGkIBE6LBMkfUmAvB2nnoiyFLWfZiqvwLLxLrgh5H8ZHbSX3LROiSsAcGQ81IkH0yfjIGLRBPFFg0dxPFeamuJiLG36Od9A2hzZiHD7QQpK3bEoCwUAu4fslRxZqsFCrj", // or leave blank to be anonymous user
      useCdn: true // `false` if you want to ensure fresh data
    });
    const doc = {
        _id: user,
        _type: 'person',
        fullName: this.state.name,
        image: this.state.imageSrc,
        organization: this.state.organization,
        score: this.state.score,
        title: this.state.title
      }
      
      client.create(doc).then(res => {
        console.log(`Person was created, document ID is ${res._id}`)
      })
  };

  render() {
    return (
      <div className={styles.root}>
        <section className={styles.landing}>
          <div
            className={styles.backImage}
            style={{
              backgroundImage:
                this.state.selectedFile != null ? `url("${this.state.imageSrc}")` : null,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%"
            }}
          >
            <div className={styles.backMask}></div>
          </div>
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
              {/* <button onClick={this.uploadImageHandler}>Upload Image</button> */}
            </label>
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
            <div></div>
          </form>
          <button onClick={() => this.sendData()}>CLICK</button>
        </section>
      </div>
    );
  }
}
export default TestingPage;
