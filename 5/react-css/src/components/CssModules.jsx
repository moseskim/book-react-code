import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules입니다</p>
      <button className={classes.button}>버튼</button>
    </div>
  );
};
