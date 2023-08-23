import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Filters = () => {
  return (
    <form>
      <Box sx={{borderRadius: '10px'}} width="100%" bgcolor="rgba(255, 255, 255, 0.80)">
        <Box sx={{ p: "10px" }}>
          <Box
            display="flex"
            alignItems="center"
            borderBottom="1px solid #000"
            paddingBottom="10px"
          >
            <FilterAltIcon />
            <Typography>Tìm kiếm theo</Typography>
          </Box>

          <Box display="flex" alignItems="flex-end" mt={1} gap={2}>
            <FormControl variant="standard" sx={{ minWidth: 120 }} size="small">
              <InputLabel
                sx={{ color: "#000" }}
                id="demo-simple-select-standard-label"
              >
                Sắp xếp 
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
                sx={{
                  ".MuiSvgIcon-root ": {
                    fill: "#000 !important",
                  },
                  ".MuiSelect-select": {
                    color: "#000",
                  },
                }}
              >
                <MenuItem value={10}>Mới nhất</MenuItem>
                <MenuItem value={20}>Cũ nhất</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <Typography>Theo chủ đề</Typography>
            <FormGroup sx={{ pl: "25px" }}>
              <FormControlLabel control={<Checkbox />} label="Môi trường" />
              <FormControlLabel control={<Checkbox />} label="Thời tiết" />
              <FormControlLabel control={<Checkbox />} label="Dự báo khí hậu" />
              <FormControlLabel
                control={<Checkbox />}
                label="Sức khỏe hoạt động"
              />
            </FormGroup>
          </Box>
          <Box mt={2}>
            <Typography>Theo năm</Typography>
            <FormControl sx={{ pl: "25px" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="2023"
                  control={<Radio />}
                  label="2023"
                />
                <FormControlLabel
                  value="2022"
                  control={<Radio />}
                  label="2022"
                />
                <FormControlLabel
                  value="2021"
                  control={<Radio />}
                  label="2021"
                />
                <FormControlLabel
                  value="old"
                  control={<Radio />}
                  label="Cũ hơn"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default Filters;
