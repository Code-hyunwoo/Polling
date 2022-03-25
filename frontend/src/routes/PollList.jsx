import Footer from "../components/layout/Footer";
import styles from "./PollList.module.css";
import chunhyang from "../assets/chunhyang.PNG";
import ocean from "../assets/ocean.PNG";
import cybertruck from "../assets/cybertruck.PNG";
import kClassic from "../assets/kClassic.PNG";
import contest from "../assets/contest.PNG";
import missKorea from "../assets/missKorea.PNG";
import eyes from "../assets/eyes.PNG";
import fox from "../assets/fox.PNG";
import gogh from "../assets/gogh.PNG";
import monarisa from "../assets/monarisa.PNG";
import hair from "../assets/hair.PNG";
import { useNavigate } from "react-router-dom";
import Newnav from "../components/layout/NewNav";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";

export default function PollList() {
  const navigate = useNavigate();
  const itemData = [
    {
      img: chunhyang,
      title: "chunhyang",
    },
    {
      img: ocean,
      title: "ocean",
    },
    {
      img: cybertruck,
      title: "cybertruck",
    },
    {
      img: kClassic,
      title: "kClassic",
    },
    {
      img: contest,
      title: "contest",
    },
    {
      img: missKorea,
      title: "missKorea",
    },
    {
      img: eyes,
      title: "eyes",
    },
    {
      img: fox,
      title: "fox",
    },
    {
      img: gogh,
      title: "gogh",
    },
    {
      img: monarisa,
      title: "monarisa",
    },
    {
      img: hair,
      title: "hair",
    },
  ];
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(itemData);
  // useEffect(() => {
  // }, [itemData]);
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isLabtop = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <Newnav />
      <div className={styles.polllist}>
        <div className={styles.list_title}>Poll List</div>
        <Box sx={{ width: "80vw", height: "auto" }}>
          {isDesktop && (
            <ImageList variant="masonry" cols={4} gap={28}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} className={styles.opened_item}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className={styles.opened_img}
                  />
                  <div className={styles.opened_info}>
                    <div style={{ fontSize: "2vw", fontWeight: 700 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "1vw" }}>
                      2022.03.03 ~ 2022.05.10
                    </div>
                  </div>
                  <div className={styles.opened_button}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#77A3A9" }}
                      onClick={() => {
                        navigate("/poll/:pollnum");
                      }}
                    >
                      투표하기
                    </Button>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          )}
          {isLabtop && (
            <ImageList variant="masonry" cols={3} gap={28}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} className={styles.opened_item}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className={styles.opened_img}
                  />
                  <div className={styles.opened_info}>
                    <div>제 91회 춘향제</div>
                    <div>2022.03.03 ~ 2022.05.10</div>
                  </div>
                  <div className={styles.opened_button}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#77A3A9" }}
                      onClick={() => {
                        navigate("/poll/:pollnum");
                      }}
                    >
                      투표하기
                    </Button>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          )}
          {isTablet && (
            <ImageList variant="masonry" cols={2} gap={28}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} className={styles.opened_item}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className={styles.opened_img}
                  />
                  <div className={styles.opened_info}>
                    <div>제 91회 춘향제</div>
                    <div>2022.03.03 ~ 2022.05.10</div>
                  </div>
                  <div className={styles.opened_button}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#77A3A9" }}
                      onClick={() => {
                        navigate("/poll/:pollnum");
                      }}
                    >
                      투표하기
                    </Button>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          )}
          {isMobile && (
            <ImageList variant="masonry" cols={1} gap={28}>
              {itemData.map((item) => (
                <ImageListItem key={item.img} className={styles.opened_item}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className={styles.opened_img}
                  />
                  <div className={styles.opened_info}>
                    <div>제 91회 춘향제</div>
                    <div>2022.03.03 ~ 2022.05.10</div>
                  </div>
                  <div className={styles.opened_button}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: "#77A3A9" }}
                      onClick={() => {
                        navigate("/poll/:pollnum");
                      }}
                    >
                      투표하기
                    </Button>
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      </div>
      <Footer />
    </>
  );
}
// <div className={styles.list_container}>
//   <div className={styles.list_item}>
//     <img src={chunhyang} alt="img1" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={ocean} alt="img2" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={cybertruck} alt="img3" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={kClassic} alt="img4" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={contest} alt="img5" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={missKorea} alt="img6" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={mrKorea} alt="img7" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={fox} alt="img8" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={snack2} alt="img10" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={hair} alt="img11" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
//   <div className={styles.list_item}>
//     <img src={snack} alt="img9" className={styles.image} />
//     <div className={styles.middle}>
//       <div>제 91회 춘향제</div>
//       <br />
//       <div>2022.03.03 ~ 2022.05.10</div>
//     </div>
//     <div className={styles.bottom}>
//       <div
//         className={styles.button}
//         onClick={() => {
//           navigate("/poll/:pollnum");
//         }}
//       >
//         투표하기
//       </div>
//     </div>
//   </div>
// </div>
