import { TextInput, Box, Button } from "@mantine/core";
import { Check, Plus, Trash, Edit, Globe } from "tabler-icons-react";
import data from "./data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { showNotification } from "@mantine/notifications";

function AddCity() {
  // const notifications = useNotifications();

  const { country } = useParams();
  const [cities, setCities] = useState([]);
  const [edit, setEdit] = useState(false);
  const [currentEditing, setCurrentEditing] = useState(null);
  const [newCityName, setNewCityName] = useState("");
  useEffect(() => {
    data.map((count) => {
      if (count.country === country) {
        setCities(count.cities);
        return 1;
      }
    });
  }, [country]);

  const handleDelete = (city) => {
    const newCities = cities.filter((c) => c !== city);

    setCities(newCities);

    showNotification({
      title: "City deleted",
      message: "You have successfully removed an entry",
      color: "red",
    });
  };

  const handleAdd = () => {
    const newCities = [...cities, newCityName];
    setCities(newCities);
    showNotification({
      title: "City added",
      message: "You have successfully added an entry",
      color: "green",
    });
  };

  const handleEdit = (city, index) => {
    setCurrentEditing(index);
    setEdit(!edit);
  };
  const handleEdited = (city, index) => {
    setCurrentEditing(index);
    setEdit(!edit);

    showNotification({
      title: "City edited",
      message: "You have successfully update name of city",
    });
  };

  const handleChange = (e, city, index) => {
    // e.preventDefault();
    const { value } = e.target;

    setCities((prev) => {
      const newCities = [...prev];
      newCities[index] = value;
      return newCities;
    });
  };

  return (
    <Wrapper>
      <div>
        <h1>Cities of the {country}</h1>

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
          <div className="createWrapper">
            <TextInput
              name="city"
              placeholder="add your city "
              onChange={(e) => setNewCityName(e.target.value)}
              icon={<Globe size={20} />}
            />
            <Button
              onClick={() => handleAdd()}
              variant="outline"
              color="green"
              m={2}
            >
              <Plus />
            </Button>
          </div>

          <ul>
            {cities.map((city, index) => (
              <li key={index}>
                {edit && currentEditing === index ? (
                  <TextInput
                    key={index}
                    name="city"
                    placeholder="seacrh "
                    defaultValue={city}
                    onChange={(e) => handleChange(e, city, index)}
                  />
                ) : (
                  <p>{city}</p>
                )}

                <div>
                  {edit === true && currentEditing === index ? (
                    <Button
                      onClick={() => handleEdited(city, index)}
                      color="green"
                      variant="outline"
                    >
                      <Check />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(city, index)}
                    >
                      <Edit />
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(city, index)}
                    color="red"
                  >
                    <Trash />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </div>
    </Wrapper>
  );
}

export default AddCity;

const Wrapper = styled.div`
  padding: 2%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  h1 {
    font-weight: 600;
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 500px;
    justify-content: center;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      button {
        margin: 3px;
      }
    }
  }
  .createWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input {
      width: 500px;
    }
  }
`;
