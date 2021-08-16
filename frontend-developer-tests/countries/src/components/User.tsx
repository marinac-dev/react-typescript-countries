import React from "react";
import Box from '@material-ui/core/Box';

interface Props {
  user: any;
}

export const User: React.FC<Props> = ({ user }) => {
  return (
    <Box display="flex" flexDirection="column">
      <div className="flex flex-row space-x-2">
        <span> {user.name.first} {user.name.last} </span>
        <span>{user.gender === "male" ? <i className="fal fa-mars"></i> : <i className="far fa-venus"></i>}</span>
      </div>
      <span>
        <i className="fal fa-flag-alt"></i> {user.location.country}
      </span>
      <span>
        <i className="fal fa-city"></i> {user.location.city}
      </span>
      <span>
        <i className="fal fa-calendar-edit"></i> {user.registered.date.slice(0, -5).replace("T", " ")}
      </span>
    </Box>
  );
}
