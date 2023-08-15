import arrowLeft from "src/Assets/Images/Icons/arrow-left.svg";
import arrowRight from "src/Assets/Images/Icons/arrow-right.svg";
import FoodIcon from 'src/Assets/Images/Dashboard/Recipes/food.png';
import DrinksIcon from 'src/Assets/Images/Dashboard/Recipes/drinks.png';
import DessertIcon from 'src/Assets/Images/Dashboard/Recipes/dessert.png';
import SpecialtyIcon from 'src/Assets/Images/Dashboard/Recipes/specialty.png';
import SeasoningIcon from 'src/Assets/Images/Dashboard/Recipes/seasoning.png';
import SauceIcon from 'src/Assets/Images/Dashboard/Recipes/sauce.png';
import AppliancesIcon from 'src/Assets/Images/Dashboard/Recipes/appliances.png';
import FoodHackIcon from 'src/Assets/Images/Dashboard/Recipes/foodHack.png';


export const CarouselLeftButton = `
    <div style='width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:white;box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);'>
        <img src='${arrowLeft}' alt='nav-arrow' />
    </div>
`;
export const CarouselRightButton = `
    <div style='width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:white;box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);'>
        <img src='${arrowRight}' alt='nav-arrow' />
    </div>
`;

export const StarSVGViewBox = "0 0 16 15";
export const StarSVGIconPath =
    "M7.90577 0.587492L9.82622 5.13287L14.7428 5.55524C15.0838 5.58469 15.2225 6.01017 14.9637 6.23414L11.2344 9.46512L12.3519 14.2717C12.4294 14.6057 12.0675 14.8684 11.7746 14.6909L7.54927 12.1427L3.32397 14.6909C3.03025 14.8676 2.6691 14.6049 2.7466 14.2717L3.86415 9.46512L0.134072 6.23337C-0.124778 6.00939 0.0131721 5.58392 0.354947 5.55447L5.27155 5.13209L7.192 0.587492C7.3253 0.271292 7.77247 0.271292 7.90577 0.587492Z";


export const RecipesCategories = [
    { id: "0", name: "All Categories", logo: FoodIcon },
    { id: "1", name: "Food", logo: FoodIcon },
    { id: "2", name: "Drinks", logo: DrinksIcon },
    { id: "3", name: "Dessert", logo: DessertIcon },
    { id: "4", name: "Specialty", logo: SpecialtyIcon },
    { id: "5", name: "Seasoning", logo: SeasoningIcon },
    { id: "6", name: "Sauce", logo: SauceIcon },
    { id: "7", name: "Appliances", logo: AppliancesIcon },
    { id: "8", name: "Food Hack", logo: FoodHackIcon },
];

export const AddRecipesList = [
    { id: "1", name: "Add Recipe" },
    { id: "2", name: "Add Drink Recipe" },
    { id: "3", name: "Add Sauce Recipe" },
    { id: "4", name: "Add Season Recipe" },
    { id: "5", name: "Add Food Hack" },
    { id: "6", name: "Add Personal Care Recipe" },
    { id: "7", name: "Import from Web" },
    { id: "8", name: "Scan from Photo" },
    { id: "9", name: "Scan from PDF" },
  ]
