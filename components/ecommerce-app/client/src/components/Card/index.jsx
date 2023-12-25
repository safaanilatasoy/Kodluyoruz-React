import {Box, Image, Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import moment from "moment";


// eslint-disable-next-line react/prop-types
function Card({item}) {
  return (
   <Box border="1px" borderRadius="lg" overflow="hidden" p="3">

    <Link to="#">
        <Image src="https://picsum.photos/id/400/200" alt="product" />

        <Box p="6">
            <Box d="flex" alignItems="baseline">
                {moment(item.createdAt).format("DD/MM/YYYY")}
            </Box>
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                {item.title}
            </Box>
            <Box>
                {item.price} TL
            </Box>
        </Box>
    </Link>
    <Button colorScheme="pink">Add to basket</Button>
   </Box>
  )
}

export default Card
