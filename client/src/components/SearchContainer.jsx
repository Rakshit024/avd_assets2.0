// import Filter from "../components/Filter";
// import Search from "../components/Search";
// import "../components/cssComponents/SearchContainer.css"; // Ensure CSS is linked correctly

// const SearchContainer = () => {
//   return (
//     <div className="search-container-main">
//       <div className="product-counter">
//         <label htmlFor="counter">
//           3 Products Found
//         </label>
//       </div>
//       <div className="search-box">
//         <Search />
//       </div>
//       <div className="filter-box">
//         <Filter />
//       </div>
//     </div>
//   );
// };

// export default SearchContainer;
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldSizes() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label="Search" id="outlined-size-normal"/>
      </div>
    </Box>
  );
}
