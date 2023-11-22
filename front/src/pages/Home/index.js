// Main imports
import { useState } from "react";

// Components
import Header from "../../components/Header";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import FormInput from "../../components/FormInput";

// Requests
import { wineQualityPredict } from "../../services/WineQualityApiRequests";

// Style - Home
import styles from "./Home.module.css";

export default function Home() {
  const [values, setValues] = useState({});
  const [quality, setQuality] = useState();

  async function handleSubmit() {
    const objectValues = Object.keys(values).map((k) => values[k]);
    const arrOfNum = objectValues.map((str) => {
      return Number(str);
    });
    const response = await wineQualityPredict({ data: arrOfNum });
    setQuality(response);
    setValues({})
    console.log(response);
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const firstInputSection = [
    {
      id: 1,
      name: "fixed_acidity",
      type: "number",
      placeholder: `4.5 to 10`,
      disabled: false,
      label: "Fixed Acidity",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 2,
      name: "volatile_acidity",
      type: "number",
      placeholder: `0.1 to 0.75`,
      disabled: false,
      label: "Volatile Acidity",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 3,
      name: "citric_acid",
      type: "number",
      placeholder: `0 to 0.7`,
      disabled: false,
      label: "Citric Acid",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 4,
      name: "residual_sugar",
      type: "number",
      placeholder: `0 to 25`,
      disabled: false,
      label: "Residual Sugar",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 5,
      name: "chlorides",
      type: "number",
      placeholder: `0.02 to 0.2`,
      disabled: false,
      label: "Chlorides",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 6,
      name: "free_sulfur_dioxide",
      type: "number",
      placeholder: `0 to 150`,
      disabled: false,
      label: "Free Sulfur Dioxide",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 7,
      name: "total_sulfur_dioxide",
      type: "number",
      placeholder: `0 to 250`,
      disabled: false,
      label: "Total Sulfur Dioxide",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 8,
      name: "density",
      type: "number",
      placeholder: `0.9 to 1`,
      disabled: false,
      label: "Density",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 9,
      name: "ph",
      type: "number",
      placeholder: `2.75 to 3.75`,
      disabled: false,
      label: "pH",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 10,
      name: "sulphates",
      type: "number",
      placeholder: `0.25 to 1`,
      disabled: false,
      label: "Sulphates",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 11,
      name: "alcohol",
      type: "number",
      placeholder: `8.5 to 14`,
      disabled: false,
      label: "Alcohol",
      required: true,
      errorMessage: "This field is required",
    },
  ];
  return (
    <div className={styles.home__container}>
      <Header />
      <Background />
      <section className={styles.section__container}>
        <form className={styles.form__container}>
          {firstInputSection.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className={styles.bttn__container}>
            <button
              className={styles.bttn__quality}
              type="button"
              onClick={handleSubmit}
            >
              <p className={styles.text__bttn}>Avaliar</p>
            </button>
          </div>
        </form>
        {quality ? <h2 className={styles.text__quality} >{quality}</h2> : ""}
      </section>
      <Footer />
    </div>
  );
}
