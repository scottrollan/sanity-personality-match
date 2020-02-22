import React, { Component } from "react";
import styles from "./TestingPage.module.css";
import TenOptions from "./TenOptions";
import PersonModal from "./PersonModal";

class TestingPage extends Component {
  state = {
    name: "",
    title: "",
    organization: "",
    selectedFile: null,
    imageSrc: null,
    imageRef: null,
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
    val10: 0,
    modalDisplay: "flex"
  };

  changeValueHandler = event => {
    const val = event.target.name;
    this.setState({ [event.target.name]: event.target.value });
  };
  changeNumberValueHandler = event => {
    this.setState({ [event.target.name]: Number(event.target.value) });
    setTimeout(() => this.tallyScore(), 500);
  };

  tallyScore = () => {
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

  uploadImageHandler = blob => {
    const imgData = this.state.selectedFile;
    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "ilens9wa",
      dataset: "production",
      token:
        // "",
        "sk5jdLyEljqSap2H9cSqGksghheLcsYQehRq7uqSraIi2ICgIpOjGkIBE6LBMkfUmAvB2nnoiyFLWfZiqvwLLxLrgh5H8ZHbSX3LROiSsAcGQ81IkH0yfjIGLRBPFFg0dxPFeamuJiLG36Od9A2hzZiHD7QQpK3bEoCwUAu4fslRxZqsFCrj", // or leave blank to be anonymous user
      useCdn: false // `false` if you want to ensure fresh data
    });
    client.assets
      .upload("image", blob, { contentType: imgData.type, filename: imgData.name })
      .then(document => {
        console.log("The image was uploaded!", document);
        this.setState({ imageRef: document._id });
        this.sendData();
      })
      .catch(error => {
        console.error("Upload failed: ", error.message);
      });
  };

  sendData = () => {    
    const user = this.state.name
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z-]/g, "")
      .toLowerCase(); //Converts "Barry S. Rollan" to "barry-s-rollan"
    const sanityClient = require("@sanity/client");
    const client = sanityClient({
      projectId: "ilens9wa",
      dataset: "production",
      token:
        "sk5jdLyEljqSap2H9cSqGksghheLcsYQehRq7uqSraIi2ICgIpOjGkIBE6LBMkfUmAvB2nnoiyFLWfZiqvwLLxLrgh5H8ZHbSX3LROiSsAcGQ81IkH0yfjIGLRBPFFg0dxPFeamuJiLG36Od9A2hzZiHD7QQpK3bEoCwUAu4fslRxZqsFCrj", // or leave blank to be anonymous user
      useCdn: false // `false` if you want to ensure fresh data
    });
    const doc = {
      _id: user,
      _type: "person",
      fullName: this.state.name,
      image: {
        asset: {
          _ref: this.state.imageRef,
          _type: "reference"
        }
      },
      organization: this.state.organization,
      score: this.state.score,
      title: this.state.title
    };

    client.createOrReplace(doc).then(res => {
      console.log(`Person was created, document ID is ${res._id}`);
    });
    
  };
  closeModal = () => {
    this.setState({ modalDisplay: "none" });
  };
  render() {
    return (
      <div className={styles.root}>
        <PersonModal 
            closeModal={this.closeModal} 
            display={this.state.modalDisplay} 
        />
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
              {/* <button onClick={() => this.uploadImageHandler(this.state.selectedFile)} required>
                Upload Image
              </button> */}
            </label>
            <hr className={styles.break} />
            <p className={styles.question}>&bull; I am not a competitive person.</p>

            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val1"
            />

            <p className={styles.question}>
              &bull; Generally, I enjoy just chatting with others over having serious discussions.
            </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val2"
            />
            <p className={styles.question}>&bull; I am often the life of the party.</p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val3"
            />
            <p className={styles.question}>
              &bull; I hardly ever worry about what might happen in the future.
            </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val4"
            />
            <p className={styles.question}>
              &bull; Generally, I prefer watching videos, tv or movies over more physicl activities
              (like walking, hiking or playing a sport).{" "}
            </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val5"
            />
            <p className={styles.question}>
              &bull; I enjoy being the focus of attention in social settings. .
            </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val6"
            />
            <p className={styles.question}>&bull; Discussing my feelings comes easily to me.</p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val7"
            />
            <p className={styles.question}>&bull; I find it difficult to multi-task. </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val8"
            />
            <p className={styles.question}>
              &bull; I don't mind sharing personal details with people.
            </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val9"
            />
            <p className={styles.question}>&bull; I have a very active imagination. </p>
            <TenOptions
              changeNumberValueHandler={event => this.changeNumberValueHandler(event)}
              name="val10"
            />
            <div></div>
          </form>
          <button type="submit" onClick={() => this.uploadImageHandler(this.state.selectedFile)}>
            CLICK
          </button>
          {/* <button onClick={() => {document.getElementById('modal').style.display = "block"}}>Open Modal</button> */}
        </section>
      </div>
    );
  }
}
export default TestingPage;
