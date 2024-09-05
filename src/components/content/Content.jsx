import { useEffect, useState } from "react";
import { getItems } from "../../utils/utils.jsx";
import Header from "../header/Header.jsx";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import images from "../../assets/images"; // Import the image mappings
import { formatItems } from "../../utils/utils.jsx"; // Make sure to import formatItems
import "./content.scss";

const Content = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        const preparedItems = formatItems(data, images);
        setItems(preparedItems);
      } catch (err) {
        console.error("Error fetching items", err);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="contentWrapper">
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const layoutClass = isEven ? "layoutLeft" : "layoutRight";
            return (
              <div
                key={index}
                className={`backgroundContainer ${layoutClass} section`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <Grid container className="infoWrapper">
                  <Grid item="true" size={6} className="leftContainer"></Grid>
                  <Grid item="true" size={6} className="rightContainer">
                    <Box
                      sx={{ padding: 5 }}
                      fontSize={"1.5rem"}
                      className="infoContainer"
                    >
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Content;
