import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions";
import styles from "./App.module.css";
import Statistics from "../statistics";
import Section from "../section";
import Notification from "../notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
  countPositiveFeedbackPercentage = (totalValue, goodValue) =>
    Math.round((goodValue / totalValue) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      good
    );
    return (
      <div className={styles.container}>
        <h1>goit-react-hw-02-feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            types={this.state}
            onAddFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
