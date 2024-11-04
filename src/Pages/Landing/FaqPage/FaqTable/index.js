import React from 'react';
import './style.scss';
import YCheckIcon from 'src/Assets/Images/Landing/check-yellow-icon.png';
import WCheckIcon from 'src/Assets/Images/Landing/check-white-icon.png';

export default function FaqTable() {

  return (
    <div className="faq-table-component">
      <table>
        <thead>
          <tr>
            <th>Features</th>
            <th>Free Members</th>
            <th>Premium Subscribers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Articles</td>
            <td><img src={WCheckIcon} alt='w-check' /></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>
          </tr>
          <tr>
            <td>Grocery list/ordering (send, share)</td>
            <td><img src={WCheckIcon} alt='w-check' /></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>
          </tr>
          <tr>
            <td>Food Storage - is a feature that helps you keep track of all the ingredients you have in your home for
              cooking. Whether it's in your pantry, seasoning cupboard, or refrigerator, everything is conveniently
              stored in one place. </td>
            <td><img src={WCheckIcon} alt='w-check' /></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>
          </tr>
          <tr>
            <td>Substitute - If you dislike a ingredient or allergic to one. we’ll give you the substitute comparable
              to that ingredient so you can still enjoy the food but with </td>
            <td><img src={WCheckIcon} alt='w-check' /></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>
          </tr>
          <tr>
            <td>Gifts & Coins - Send your favorite recipe maker or content creator Coins or Gifts they can cash in
            </td>
            <td><img src={WCheckIcon} alt='w-check' /></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>
          </tr>
          <tr>
            <td className="orange-colr">Detailed nutrition's - Calories, macros, nutrients, and more.</td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>

          </tr>
          <tr>
            <td className="orange-colr">Meal planner - Plan your meals fir the day, week or month. update grocery list,
              hit your goal and take control of your diet! You can set Set it too Healthy , Custom , Sports or
              intermittent fasting or no preference. </td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>

          </tr>
          <tr>
            <td className="orange-colr">Chat gpt intergration </td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>

          </tr>
          <tr>
            <td className="orange-colr">A Chefs Cuisine Original recipes and recipes from A.C.C affiliates. All Recipe
              access. </td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>

          </tr>
          <tr>
            <td className="orange-colr">Verified - For posting, commenting, and reviewing recipe’s Verified Takes
              precedent over non-verified users.</td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>

          </tr>
          <tr>
            <td className="orange-colr">Gifts & Coins for non-Verified users 21%
              Gifts & Coins for Verified user 80%</td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>

          </tr>
          <tr>
            <td className="orange-colr">Gold ribbon compared to regular dark blue ribbon, gold is 7.99 is for business ,
              etc, and dark blue ribbon is 5.99 is for regular users.</td>
            <td></td>
            <td><img src={YCheckIcon} alt='y-check' /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
