import React, { useState, useEffect } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { getGenres } from "./Talker/talker";
import Animation from "./Pages/Animation";
import Biography from "./Pages/Biography";
import Mystery from "./Pages/Mystery";
import Adventure from "./Pages/Adventure";
import Comedy from "./Pages/Comedy";
import Crime from "./Pages/Crime";
import Drama from "./Pages/Drama";
import Action from "./Pages/Action";


const Home = props => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);

  const loadAllGenres = () => {
    getGenres().then(data => {
      if (data.error)
        setError(data.error);
      else setGenres(data);
    });
  };

  useEffect(() => {
    loadAllGenres();
  }, []);

  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "animation",
    1: "biography",
    2: "adventure",
    3: "comedy",
    4: "action",
    5: "crime",
    6: "drama",
    7: "mystery"
  };

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
      <Tabs value={selectedTab} onChange={handleChange}>
          {genres.map(genre => {
            return (
               <Tab 
               key = {genre._id}
               label = {genre.Name} />
              )
            })}
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Animation/>}
      {selectedTab === 1 && <Biography/>}
      {selectedTab === 2 && <Adventure/>}
      {selectedTab === 3 && <Comedy/>}
      {selectedTab === 4 && <Action/>}
      {selectedTab === 5 && <Crime/>}
      {selectedTab === 6 && <Drama/>}
      {selectedTab === 7 && <Mystery/>}
    </>
  );
};


export default Home;