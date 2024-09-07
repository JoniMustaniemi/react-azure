import { useEffect, useState } from "react";
import { getItems } from "../../utils/utils.jsx";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import images from "../../assets/images";
import { formatItems } from "../../utils/utils.jsx";

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
    <Box
      className="contentWrapper"
      sx={{
        fontFamily: "'Verdana', 'Geneva', 'Tahoma', sans-serif",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        scrollSnapType: "y proximity",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const layoutClass = isEven ? "layoutLeft" : "layoutRight";
            return (
              <Box
                key={index}
                className={`backgroundContainer ${layoutClass} section`}
                sx={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  width: "100%",
                  height: "100vh",
                  scrollSnapAlign: "start",
                }}
              >
                <Grid container className="infoWrapper" sx={{ height: "100%" }}>
                  <Grid
                    item="true"
                    size={6}
                    className="leftContainer"
                    sx={{
                      order: layoutClass === "layoutLeft" ? 1 : 0,
                    }}
                  />
                  <Grid
                    item="true"
                    size={6}
                    className="rightContainer"
                    sx={{
                      height: "100%",
                      width: "50%",
                      overflow: "hidden",
                      order: layoutClass === "layoutLeft" ? 0 : 1,
                    }}
                  >
                    <Box
                      sx={{
                        padding: 5,
                        width: "fit-content",
                        maxWidth: "50%",
                        marginLeft: "20%",
                        height: "inherit",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        textShadow: "0 6px 6px #000000, 0 -2px 1px #000000",
                      }}
                    >
                      <Box
                        component="h1"
                        sx={{ fontSize: "clamp(1rem, 2.5vw, 3.5rem)" }}
                      >
                        {item.title}
                      </Box>
                      <Box
                        component="p"
                        sx={{ fontSize: "clamp(1rem, 1.2vw, 3.5rem)" }}
                      >
                        {item.description}
                      </Box>

                      <Box
                        sx={{
                          textAlign: "center",
                          marginTop: "20%",
                          width: "100%",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{
                            width: "fit-content",
                            fontSize: "clamp(1rem, 1vw, 3.5rem)",
                          }}
                        >
                          Preorder now
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Content;
