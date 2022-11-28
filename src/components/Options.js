/* eslint-disable no-nested-ternary */
import { Fragment } from "react";
import classes from "../styles/Options.module.css";
import CheckBox from "./Checkbox";

export default function Options({ options = [], handleChange, input }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index.toFixed}>
          {input ? (
            <CheckBox
              key={index.toFixed}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <CheckBox
              key={index.toFixed}
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
