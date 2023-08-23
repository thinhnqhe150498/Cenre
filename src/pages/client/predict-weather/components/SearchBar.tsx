import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <FormControl sx={{ width: "100%", bgcolor: "#fff", borderRadius: "10px", mb: 1 }}>
      <TextField
        size="small"
        variant="outlined"
        sx={{ color: "#000", borderRadius: "10px", input: { color: "#000" } }}
        placeholder="Tìm kiếm bài viết"
        InputProps={{
          style: {
            borderRadius: "10px",
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#000" }} />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
