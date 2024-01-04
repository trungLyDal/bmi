import React from 'react';
import ScrollToTopButton from './components/ScrollToTopButton';
import FoodDeficit from "./assets/FoodDeficit.jpg";
import LoseWeight from "./assets/LoseWeight.jpg";
import MealPlan from "./assets/MealPlan.jpg";
import R from "./assets/R.png";


const WeightLossPage = () => {
  return (
    <div className= "article-sections">
      <main>
        <h1>Weight Loss</h1>
        <img src= {R} alt="Weight gain "/>

        <h3><strong>Healthy Ways to Lose Weight: A Comprehensive Guide</strong></h3>
        <p>While much attention is often given to weight gain, there are individuals who struggle with the challenge of losing weight in a healthy and sustainable manner. Whether you're looking to shed excess fat or address unhealthy habits, losing weight should be approached with the same level of diligence and commitment as weight gain. Here's a comprehensive guide on healthy ways to lose weight.</p>

        <h4><strong>1. Nutrient-Rich Foods:</strong></h4>
        <img src= {MealPlan} alt="Weight food "/>
        <p>Focus on consuming nutrient-dense foods that provide essential vitamins and minerals. Include whole grains, lean proteins, healthy fats, and a variety of fruits and vegetables in your diet. Opt for whole, unprocessed foods that offer a balance of macronutrients and micronutrients.</p>

        <h4>2. Caloric Deficit:</h4>
        <img src= {FoodDeficit} alt="Weight food "/>
        <p>To lose weight, you must consume fewer calories than your body burns. Calculate your daily caloric needs and aim for a deficit. This doesn't mean skipping meals; instead, choose nutrient-rich foods to meet your reduced caloric goals.</p>

        <h4>3. Regular, Balanced Meals:</h4>
        <img src ={LoseWeight} alt="Weight loss "/>
        <p>Eat at regular intervals throughout the day, ensuring a balance of carbohydrates, proteins, and fats in each meal. Include healthy snacks between meals to manage hunger and maintain energy levels. Consistency is key to successful weight loss.</p>
        <ScrollToTopButton/>
      </main>
   </div>
  );
};

export default WeightLossPage;
