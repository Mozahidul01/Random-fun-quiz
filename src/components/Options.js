/* eslint-disable no-nested-ternary */
import { Fragment } from "react";
import classes from "../styles/Options.module.css";
import CheckBox from "./Checkbox";

export default function Options({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={Math.random() * 1000}>
          {input ? (
            <CheckBox
              key={Math.random() * 1000}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <CheckBox
              key={Math.random() * 1000}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
