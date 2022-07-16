import { Box, Flex, Text,TableContainer,Table,Thead,Tr,Th,Tbody,Td, Img } from "@chakra-ui/react"
import { useState } from "react";
import anime from "../images/anime.jpg";



const List = [
  { 
    anime:{ 
      img:'../images/anime.jpg',
      name: 'Grizzo',
      tag: '#welcome',
    },
    code: '98HNPn',
    uses: '0',
    time: '23:50:59'
   },
   { 
    anime:{ 
      img:'../images/anime.jpg',
      name: 'Grizzo',
      tag: '#welcome',
    },
    code: '98HNPn',
    uses: '0',
    time: '23:50:59'
   },
   { 
    anime:{ 
      img:'../images/anime.jpg',
      name: 'Grizzo',
      tag: '#welcome',
    },
    code: '98HNPn',
    uses: '0',
    time: '23:50:59'
   },
   { 
    anime:{ 
      img:'../images/anime.jpg',
      name: 'Grizzo',
      tag: '#welcome',
    },
    code: '98HNPn',
    uses: '0',
    time: '23:50:59'
   },
   { 
    anime:{ 
      img:'../images/anime.jpg',
      name: 'Grizzo',
      tag: '#welcome',
    },
    code: '98HNPn',
    uses: '0',
    time: '23:50:59'
   },
   { 
    anime:{ 
      img:'../images/anime.jpg',
      name: 'Grizzo',
      tag: '#welcome',
    },
    code: '98HNPn',
    uses: '0',
    time: '23:50:59'
   },
  
]


function Invite( ) {

  const [dataTable, setDataTable ] = useState(List)
  
  setDataTable(List)


  const column = [
    { heading: 'INVITER', value:'anime' },
    { heading: 'INVITE CODE', value:'code' },
    { heading: 'USES', value:'uses' },
    { heading: 'EXPIRES', value:'time' },
  ]

  return (
    <Flex bg="black" height="100%" color="white" direction="column"  >
      <Text>INVITES</Text>
      <Text> Here is the list of all the active invite links, you can revoke anyone</Text>
      <TableContainer>  
          <Table variant='simple'  data ={dataTable} column={column} >
            <Thead> 
              <Tr>
                {column.map((items) => <TableHeadItem  items={items} />)}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((items, index) => <TableRow items={items} column={column}/>) }
            </Tbody>

          </Table>
      </TableContainer>
     </Flex>
  )
}

const TableHeadItem = ({ items }) => <th>{items.heading}</th>
const TableRow = ({ items, column }) => <tr>{column.map((columnItem, index) =>{
  return <td>{items[`${columnItem.value}`]}</td>
})}</tr>

export default Invite