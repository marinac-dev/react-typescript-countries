import React from "react";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";

interface Props {
  // setFilterValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFilterValue: any;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const FilterUsers: React.FC<Props> = ({ setFilterValue }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Filter by</InputLabel>
        <Select onChange={(e) => { setFilterValue(e.target.value); }} label="Filter by" defaultValue={"all"}>
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
