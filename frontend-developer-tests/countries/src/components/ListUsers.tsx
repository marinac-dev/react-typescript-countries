import React, { useState } from "react";
import { User } from "./User";
import { FilterUsers } from "./FilterUsers";
import { List, ListItem } from "@material-ui/core";

interface Props {
  users: any;
}

export const ListUsers: React.FC<Props> = ({ users }) => {
  const [filterValue, setFilterValue] = useState("all");

  const sortUsers = (users: Array<any>) => {
    return users.sort((a: any, b: any) => {
      const date_a = Date.parse(a.registered.date);
      const date_b = Date.parse(b.registered.date);
      return date_b - date_a;
    });
  };
  

  return (
    <div>
      <FilterUsers setFilterValue={setFilterValue} />

      <List>
        {users && sortUsers(users) &&
          users.map((user: any) => {
            if (user.gender === filterValue) {
              return (
                <ListItem key={user.login.uuid}><User user={user} key={user.login.uuid} /></ListItem>
              );
            } else if (filterValue === "all") {
              return (
                <ListItem key={user.login.uuid}><User user={user} key={user.login.uuid} /></ListItem>
              );
            } else {
              return null;
            }
          })}
      </List>
    </div>
  );
};
