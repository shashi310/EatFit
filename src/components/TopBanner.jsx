import "../Styles/TopBanner.css";
import { Box, Image, Text } from "@chakra-ui/react";

import { useRef, useState } from "react";

const firstBanner = [
  {name:"All Brands",image:'https://curefoods-images.eatfit.in/image/listing-brands/CUREFOODS/CUREFOODS_SELECTED_IMAGE_1.svg'},
  {link:'#orders',name:"top pics",image:'https://curefoods-images.eatfit.in/image/listing-brands/NEW_AND_POPULAR/NEW_AND_POPULAR_IMAGE_production_12th_Oct_22_6_30_58.svg'},
  {link:'#contact',name:"Contact Us",image:'https://static.vecteezy.com/system/resources/previews/005/747/564/non_2x/24-hours-customer-service-icon-24-7-support-icon-sign-button-customer-service-icon-vector.jpg'},
  {name:"Explore",image:'https://curefoods-images.eatfit.in/image/listing-brands/EAT_FIT/EAT_FIT_IMAGE_1.svg'},
  {name:"Food-Corner",image:'https://curefoods-images.eatfit.in/image/listing-brands/HRX_BY_EATFIT/HRX_BY_EATFIT_IMAGE_production_3rd_Aug_23_5_17_20.svg'},
  {name:"Ardino",image:'https://curefoods-images.eatfit.in/image/listing-brands/GREAT_INDIAN_KHICHDI/GREAT_INDIAN_KHICHDI_IMAGE_production_2nd_Aug_23_10_37_57.svg'},
  {name:"Ardino",image:'https://curefoods-images.eatfit.in/image/listing-brands/CHOW_TAO/CHOW_TAO_IMAGE_1.svg'},
  {name:"macroni",image:'https://curefoods-images.eatfit.in/image/listing-brands/OLIO/OLIO_IMAGE_production_23rd_Feb_23_6_12_57.svg'},
  {name:"rasberipi",image:'https://curefoods-images.eatfit.in/image/listing-brands/PARATHA_BOX/PARATHA_BOX_IMAGE_1.svg'},
  {name:"margrita",image:'https://curefoods-images.eatfit.in/image/listing-brands/SMOODIES/SMOODIES_IMAGE_production_7th_Nov_22_7_00_08.svg'},
  {name:"oligo pizza",image:'https://curefoods-images.eatfit.in/image/listing-brands/CHOW_TAO/CHOW_TAO_IMAGE_1.svg'}
];

export function TopBanner() {
  const secondBanner = new Array(9).fill(0);
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(parentRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const walk = (e.clientX - startX) * 2;
    parentRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleNavigate = (link) => {
    if (link) {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.click();
    }
  };

  return (
    <>
      <Box
        className="top_banner"
        w={{ base: "95%", sm: "95%", md: "70%", lg: "70%", xl: "70%" }}
        m="auto"
        mt="90px"
        overflowX="auto"
        whiteSpace="nowrap"
        p="5px"
      >
        {firstBanner.map((ele, index) => (
          <Box
            onClick={() => handleNavigate(ele.link)}
            display="inline-block"
            m={{
              base: "0 10px",
              sm: "0 10px",
              md: "0 20px",
              lg: "0 20px",
              xl: "0 20px",
            }}
            key={index + 1}
            textAlign="center"
            minWidth="70px"
            w="70px"
            p="5px"
            borderRadius="10px"
          >
            <Image
              borderRadius="full"
              border="2px solid rgb(235,12,119)"
              minWidth="50px"
              w="70px"
              src={ele.image}
              alt={ele.name}
            />

            <Text fontSize="11px">{ele.name}</Text>
          </Box>
        ))}
      </Box>
      <br />
      <Box
        className="second_banner"
        w="90%"
        m="auto"
        overflowX="auto"
        whiteSpace="nowrap"
        ref={parentRef}
      >
        {secondBanner.map((ele, ind) => (
          <Image
            w={{
              base: "330px",
              sm: "330px",
              md: "380px",
              lg: "380px",
              xl: "380px",
            }}
            display="inline-block"
            ref={childRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            m="0 15px"
            src="https://curefoods-images.eatfit.in/tr:w-622,ar-480:200//image/vm/1897a34b-5a66-474c-a695-2b19c0895a0f.png"
            alt={ind}
          />
        ))}
      </Box>
    </>
  );
}
