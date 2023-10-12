import React, { useState } from 'react';

import styles from './Forms.module.css';

function BmiCalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBmi = () => {
        const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setCategory('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            setCategory('Normal weight');
        } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
            setCategory('Overweight');
        } else {
            setCategory('Obese');
        }
    };

    return (
        <div className={styles.forms}>
            <h2>BMI Calculator</h2>
            <div className={styles.formsItem}>
                <label htmlFor="weight">Weight (kg): </label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className={styles.formsItem}>
                <label htmlFor="height">Height (cm): </label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button onClick={calculateBmi} className={styles.formsItem}>Calculate BMI</button>
            {bmi && (
                <div className={styles.formsItem}>
                    <p>Your BMI is: {bmi}</p>
                    <p>Your BMI category is: {category}</p>
                </div>
            )}
        </div>
    );
}

export default BmiCalculator;
