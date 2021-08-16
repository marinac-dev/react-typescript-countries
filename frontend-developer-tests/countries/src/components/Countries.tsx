import React from "react";
import { ListUsers } from "./ListUsers";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

interface Props {
  countriesWithUsers: Array<Array<any>>;
}

export const Countries: React.FC<Props> = ({ countriesWithUsers }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {countriesWithUsers &&
        countriesWithUsers.map((countryWithUser: Array<any>) => {
          const country = countryWithUser[0]
          const users = countryWithUser[1]
          return (
            <Accordion square expanded={expanded === country} onChange={handleChange(country)} key={country}>
              <AccordionSummary id={country}>
                <Typography>{country}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ListUsers users={users} />
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};
