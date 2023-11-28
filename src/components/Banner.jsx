
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Flex, Image, Text, IconButton,useBreakpointValue } from '@chakra-ui/react';

const dishesData = [
  { name: 'Paneer Tikka', image: 'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png' },
  { name: 'Butter Chicken', image: 'https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg' },
  { name: 'Masala Dosa', image: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png' },
  { name: 'Rogan Josh', image: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png' },
  { name: 'Chole Bhature', image: 'https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png' },
  { name: 'Biryani', image: 'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png' },
  { name: 'Palak Paneer', image: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png' },
  { name: 'Burger', image: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
  { name: 'Cake', image: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' },
  { name: 'Fish Curry', image: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
  
];

const Banner = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 6 }); // Number of items to display based on breakpoints
    // const marginTop = useBreakpointValue({ base: '15%', sm: '16%', md: '9%', lg: '7%' });
  
    const goToPrev = () => {
      const newIndex = startIndex === 0 ? dishesData.length - itemsPerPage : startIndex - 1;
      setStartIndex(newIndex);
    };
  
    const goToNext = () => {
      const newIndex = startIndex === dishesData.length - itemsPerPage ? 0 : startIndex + 1;
      setStartIndex(newIndex);
    };
  
    useEffect(() => {
      const interval = setInterval(goToNext, 160000);
      return () => clearInterval(interval);
    }, [startIndex]);
  
    let visibleData = [];
    if (startIndex + itemsPerPage <= dishesData.length) {
      visibleData = dishesData.slice(startIndex, startIndex + itemsPerPage);
    } else {
      visibleData = [
        ...dishesData.slice(startIndex),
        ...dishesData.slice(0, startIndex + itemsPerPage - dishesData.length),
      ];
    }
  
    return (
      <Flex alignItems="center" justifyContent="center" position="relative" mt="1%">
        <IconButton
          icon={<FaChevronLeft />}
          aria-label="Previous"
          variant="ghost"
          size="lg"
          isRound
          onClick={goToPrev}
          position="absolute"
          left="10px"
          zIndex="1"
        />
        <Flex alignItems="center" overflow="hidden">
          {visibleData.map((dish, index) => (
            <Flex
              key={index}
              direction="column"
              alignItems="center"
              marginRight={index !== itemsPerPage - 1 ? '20px' : '0'}
              transition="transform 0.5s ease-in-out"
              transform={`translateX(-${startIndex * 170}px)`} 
            >
              <Image src={dish.image} alt={dish.name} width="150px" height="150px" borderRadius="50%" />
              <Text textAlign="center" marginTop="5px" fontSize="sm">
                {dish.name}
              </Text>
            </Flex>
          ))}
        </Flex>
        <IconButton
          icon={<FaChevronRight />}
          aria-label="Next"
          variant="ghost"
          size="lg"
          isRound
          onClick={goToNext}
          position="absolute"
          right="10px"
          zIndex="1"
        />
      </Flex>
    );
  };
  
  export default Banner;