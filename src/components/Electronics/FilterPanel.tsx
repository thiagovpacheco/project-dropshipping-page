import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Slider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FilterPanelProps {
  filters: {
    category: string;
    brand: string;
    isPromotion: boolean;
    minPrice?: number;
    maxPrice?: number;
  };
  onFilterChange: (newFilters: any) => void;
}

const categories = [
  'Smartphones',
  'Notebooks',
  'Tablets',
  'Áudio',
  'TV'
];

const brands = [
  'Apple',
  'Samsung',
  'Xiaomi',
  'Dell',
  'Sony',
  'LG'
];

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const handleCategoryClick = (category: string) => {
    onFilterChange({
      ...filters,
      category: filters.category === category ? '' : category.toLowerCase()
    });
  };

  const handleBrandClick = (brand: string) => {
    onFilterChange({
      ...filters,
      brand: filters.brand === brand ? '' : brand
    });
  };

  const handlePromotionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filters,
      isPromotion: event.target.checked
    });
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onFilterChange({
        ...filters,
        minPrice: newValue[0],
        maxPrice: newValue[1]
      });
    }
  };

  return (
    <Box>
      {/* Categorias */}
      <Accordion defaultExpanded disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            minHeight: '48px !important',
            '& .MuiAccordionSummary-content': {
              margin: '12px 0 !important'
            }
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Categorias</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <List disablePadding>
            {categories.map((category) => (
              <ListItem
                key={category}
                button
                selected={filters.category === category.toLowerCase()}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  pl: 2,
                  pr: 2,
                  py: 1,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(108, 92, 231, 0.08)',
                    color: '#6C5CE7',
                    '&:hover': {
                      bgcolor: 'rgba(108, 92, 231, 0.12)'
                    }
                  }
                }}
              >
                <ListItemText primary={category} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Marcas */}
      <Accordion defaultExpanded disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            minHeight: '48px !important',
            '& .MuiAccordionSummary-content': {
              margin: '12px 0 !important'
            }
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Marcas</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <List disablePadding>
            {brands.map((brand) => (
              <ListItem
                key={brand}
                button
                selected={filters.brand === brand}
                onClick={() => handleBrandClick(brand)}
                sx={{
                  pl: 2,
                  pr: 2,
                  py: 1,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(108, 92, 231, 0.08)',
                    color: '#6C5CE7',
                    '&:hover': {
                      bgcolor: 'rgba(108, 92, 231, 0.12)'
                    }
                  }
                }}
              >
                <ListItemText primary={brand} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Faixa de Preço */}
      <Accordion defaultExpanded disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            minHeight: '48px !important',
            '& .MuiAccordionSummary-content': {
              margin: '12px 0 !important'
            }
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>Faixa de Preço</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2, pt: 2, pb: 3 }}>
          <Slider
            value={[filters.minPrice || 0, filters.maxPrice || 15000]}
            onChange={handlePriceChange}
            min={0}
            max={15000}
            step={100}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `R$ ${value}`}
            sx={{
              color: '#6C5CE7',
              '& .MuiSlider-valueLabel': {
                bgcolor: '#6C5CE7'
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography variant="caption" color="text.secondary">
              R$ 0
            </Typography>
            <Typography variant="caption" color="text.secondary">
              R$ 15.000
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Apenas Promoções */}
      <Box sx={{ px: 2, py: 1.5 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.isPromotion}
              onChange={handlePromotionChange}
              sx={{
                color: 'rgba(0, 0, 0, 0.54)',
                '&.Mui-checked': {
                  color: '#6C5CE7'
                }
              }}
            />
          }
          label={
            <Typography variant="body2">
              Apenas Promoções
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};
