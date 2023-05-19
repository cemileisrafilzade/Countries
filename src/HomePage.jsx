import { Box, Button } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import data from "./data";

const HomePage = () => {
  return (
    <TableWrapper>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: "pointer",

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
          },
        })}
      >
        <h2>List of the countries</h2>

        <ul>
          {data.map((country) => {
            return (
              <li key={country.iso3}>
                {country.country}
                <div className="btns">
                  <Link to={`/cities/${country.country}`}>
                    <Button variant="outline">Explore the cities</Button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Box>
    </TableWrapper>
  );
};

export default HomePage;
const TableWrapper = styled.div`
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  a {
    color: black;
    text-decoration: none;
  }
  ul {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
  }
  ul li {
    list-style: none;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .btns button {
    margin: 5px;
  }
`;
