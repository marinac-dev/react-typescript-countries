import React, { useState, useEffect } from "react";

import "./App.css";
import { Countries } from "./components/Countries";
import { Header } from "./components/Header";
import Container from "@material-ui/core/Container";

export const App: React.FC = () => {
  const [countriesWithUsers, setCountriesWithUsers] = useState<Array<any>>([]);

  const fetchData = async () => {
    return await fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then(({ results: users }) => {
        const data = users.reduce((acc: any, user: any) => {
          const location = user.location.country;
          acc[location] = acc[location] || [];
          acc[location].push(user);
          return acc;
        }, {});

        const keys: Array<string> = Object.keys(data);
        const vals: Array<object> = Object.values(data);

        let countriesWithUsers = [];

        for (let i = 0; i < keys.length; i++) {
          let countryData = [keys[i], vals[i]];
          countriesWithUsers.push(countryData);
        }

        countriesWithUsers.sort((a: Array<any>, b: Array<any>) => b[1].length - a[1].length);

        setCountriesWithUsers(countriesWithUsers);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Header />
      <Countries countriesWithUsers={countriesWithUsers} />
    </Container>
  );
};
