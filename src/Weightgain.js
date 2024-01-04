import React from 'react';
import MyImage from './assets/weight-gain.webp';
import gainweightFood from "./assets/6bestfoodsforhealthyweightgaininfographics.jpg"
import surplus from "./assets/e16db30fa4ca7c0bfa014b30c4ffbd3d.jpg"
import balanced from "./assets/OIP.jpg"
import ScrollToTopButton from './ScrollToTopButton';


const WeightGainPage = () => {
  return (
  
   <main>
    <div className= "article-sections">
        <h1>Weight Gain</h1>
        <img src= {MyImage} alt="Weight gain "/>
        <h3><strong>Healthy Ways to Gain Weight: A Comprehensive Guide</strong></h3>
        <p>While much attention is often given to weight loss, there are individuals who struggle with the opposite challenge: gaining weight in a healthy and sustainable manner. Whether you're looking to build muscle mass or address a naturally fast metabolism, gaining weight should be approached with the same level of diligence and commitment as weight loss. Here's a comprehensive guide on healthy ways to gain weight.</p>
        
        <h4><strong>1. Nutrient-Rich Foods:</strong></h4>
        <img src= {gainweightFood} alt="Weight food "/>

        <p>Focus on consuming nutrient-dense foods that provide essential vitamins and minerals. Include whole grains, lean proteins, healthy fats, and a variety of fruits and vegetables in your diet. Opt for whole, unprocessed foods that offer a balance of macronutrients and micronutrients.</p>
        
        <h4>2. Calorie Surplus:</h4>
        <img src= {surplus} alt="Weight food "/>
        <p>To gain weight, you must consume more calories than your body burns. Calculate your daily caloric needs and aim for a surplus. This doesn't mean indulging in empty calories; instead, choose nutrient-rich foods to meet your caloric goals.</p>
        
        <h4>3. Regular, Balanced Meals:</h4>
        <img src= {balanced} alt="Weight food "/>

        <p>Eat at regular intervals throughout the day, ensuring a balance of carbohydrates, proteins, and fats in each meal. Include snacks between meals to increase your overall calorie intake. Skipping meals can impede weight gain and negatively impact your health.</p>
        <ScrollToTopButton/>
    </div>
   </main>
    
  );
};

export default WeightGainPage;

  