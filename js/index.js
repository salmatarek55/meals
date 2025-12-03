var mealimage= document.getElementById("image");
var mealrate=document.getElementById("mealrate");
var mealreview=document.getElementById("mealreview");
var PrepTime=document.getElementById("PrepTime");
var CookTime=document.getElementById("CookTime");
var Servings=document.getElementById("Servings");
var mealProperty=document.getElementById("mealProperty");
var mealCountry=document.getElementById("mealCountry");
var titleName=document.getElementById("titleName");
var titleDetails=document.getElementById("titleDetails");
var cardIngredients = document.querySelector(".cardIngredients");
var cardInstructions = document.querySelector(".cardInstructions");
var cardChef = document.querySelector(".cardChef");
var Calories=document.getElementById("Calories");
var Carbohydrates=document.getElementById("Carbohydrates");
var Fiber=document.getElementById("Fiber");
var Protein=document.getElementById("Protein");
var Fat=document.getElementById("Fat");
var Sodium=document.getElementById("Sodium");
var newMealBtn=document.getElementById("newMealBtn");

var currentIndex=0;

var mealList =[
    {
       title: "Caprese Sandwich",
        image: "images/caprese_sandwich2.jpg",
        rating: 4.5,
        reviews: "(189 reviews)",
        prepTime: "10 min",
        cookTime: "5 min",
        servings: "2 People",
        property: "Easy",
        country: "Italian",
        description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        ingredients: [
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>1 ciabatta bread</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>200g fresh mozzarella, sliced</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>2 large tomatoes, sliced</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>Fresh basil leaves</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>5</span><p class='text-secondary'>3 tablespoons pesto</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>6</span><p class='text-secondary'>2 tablespoons balsamic glaze</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>7</span><p class='text-secondary'>Olive oil</p></div>",
            "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>8</span><p class='text-secondary'>Salt and pepper</p></div>",            
        ],
        instructions: [
           "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Slice ciabatta bread in half horizontally.</p></div>",
           "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>Toast bread lightly until just crispy.</p></div>",
           "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>Spread pesto on both sides of bread.</p></div>",
           "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>Layer mozzarella slices, tomato slices, and fresh basil leaves.</p></div>",
           "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>5</span><p class='text-secondary'>Drizzle with olive oil and balsamic glaze. Season with salt and pepper.</p></div>",
        ],
        
        Calories:"480 kcal",
        Carbohydrates:"48g",
        Fiber:"3g",
        Protein:"22g",
        Fat:"22g",
        Sodium:"680mg",


        chefTips: [
             `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB; '>
           <span class='w-25 h-25 rounded-circle p-1 text-center me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
             Use ripe, in-season tomatoes for best flavor
        </div>`,

        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
             Buffalo mozzarella is traditional but harder to slice
        </div>`,

        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
               Toast bread lightly - not too crispy
        </div>`,

        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
              Add prosciutto or salami for a heartier sandwich
        </div>`,

        ]
    },

    
  {
    title: "Grilled Chicken Wrap",
    image: "images/grilled-chicken-wrap-with-veggies-transparent-png.webp",
    rating: 4.7,
    reviews: "(215 reviews)",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "2 People",
    property: "Medium",
    country: "American",
    description: "Wrap filled with grilled chicken, fresh veggies, and a tangy sauce",
    ingredients: [
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>2 large flour tortillas</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>200g grilled chicken breast, sliced</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>1 cup mixed lettuce leaves</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>1 medium tomato, sliced</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>5</span><p class='text-secondary'>2 tablespoons mayonnaise</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>6</span><p class='text-secondary'>1 tablespoon mustard</p></div>",
    ],
    instructions: [
       "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Warm the tortillas lightly on a pan.</p></div>",
       "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>Mix mayonnaise and mustard, then spread over tortillas.</p></div>",
       "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>Layer grilled chicken, lettuce, and tomato.</p></div>",
       "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>Roll tightly and slice diagonally before serving.</p></div>",
    ],
    Calories:"520 kcal",
    Carbohydrates:"40g",
    Fiber:"4g",
    Protein:"35g",
    Fat:"25g",
    Sodium:"750mg",
    chefTips: [
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB; '>
           <span class='w-25 h-25 rounded-circle p-1 text-center me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
             Use fresh grilled chicken for juicier flavor
        </div>`,
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
              Add avocado slices for extra creaminess
        </div>`,
    ]
  },


  {
    title: "Veggie Stir-Fry",
    image: "images/vegetable_stir_fry.jpg",
    rating: 4.6,
    reviews: "(178 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "3 People",
    property: "Easy",
    country: "Chinese",
    description: "Quick and healthy stir-fried vegetables with a savory sauce",
    ingredients: [
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>2 cups broccoli florets</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>1 red bell pepper, sliced</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>1 carrot, sliced thin</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>2 tablespoons soy sauce</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>5</span><p class='text-secondary'>1 tablespoon sesame oil</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>6</span><p class='text-secondary'>2 cloves garlic, minced</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>7</span><p class='text-secondary'>Salt and pepper to taste</p></div>",

    ],
    instructions: [
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Heat sesame oil in a wok over medium-high heat.</p></div>",
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>Add garlic and sauté until fragrant.</p></div>",
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>Add vegetables and stir-fry for 5-7 minutes.</p></div>",
    ],
    Calories:"220 kcal",
    Carbohydrates:"28g",
    Fiber:"6g",
    Protein:"6g",
    Fat:"10g",
    Sodium:"550mg",
    chefTips: [
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB; '>
           <span class='w-25 h-25 rounded-circle p-1 text-center me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
            Use crisp vegetables to retain texture
        </div>`,
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
             Add tofu or chicken for extra protein
        </div>`,
    ]
  },

  {
    title: "Shrimp Tacos",
    image: "images/Shrimp-Tacos-6.jpg",
    rating: 4.8,
    reviews: "(142 reviews)",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "2 People",
    property: "Medium",
    country: "Mexican",
    description: "Soft tacos filled with spicy shrimp, fresh slaw, and avocado",
    ingredients: [
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>4 small tortillas</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>200g shrimp, peeled and deveined</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>1 cup shredded cabbage</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>1 avocado, sliced</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>5</span><p class='text-secondary'>2 tablespoons lime juice</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>6</span><p class='text-secondary'>1 teaspoon chili powder</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>7</span><p class='text-secondary'>Salt and pepper</p></div>",

    ],
    instructions: [
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Season shrimp with chili powder, salt, and pepper.</p></div>",
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Cook shrimp in a skillet for 2-3 minutes per side.</p></div>",
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Warm tortillas, then layer cabbage, shrimp, and avocado slices.</p></div>",
        "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Drizzle lime juice on top and serve immediately.</p></div>",
    ],
    Calories:"400 kcal",
    Carbohydrates:"30g",
    Fiber:"5g",
    Protein:"25g",
    Fat:"18g",
    Sodium:"600mg",
    chefTips: [
       `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB; '>
           <span class='w-25 h-25 rounded-circle p-1 text-center me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
           Use medium-sized shrimp for even cooking
        </div>`,
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
            Add fresh cilantro for extra flavor
        </div>`,
    ]
  },

 {
    title: "Chocolate Banana",
    image:"images/banana.webp",
    rating: 4.9,
    reviews: "(198 reviews)",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: "1 Person",
    property: "Easy",
    country: "Global",
    description: "Creamy smoothie with bananas, cocoa, and almond milk",
    ingredients: [
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>1 large banana</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>1 cup almond milk</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>2 tablespoons cocoa powder</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>4</span><p class='text-secondary'>1 tablespoon honey</p></div>",
        "<div class='d-flex'><span class='rounded-circle text-center me-1' style='background-color:#FE4722; color:white; width:30px; height:30px;'>5</span><p class='text-secondary'>Ice cubes as needed</p></div>",
    ],
    instructions: [
         "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>1</span><p class='text-secondary'>Place all ingredients in a blender.</p></div>",
         "<div class='d-flex'><span class=' rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>2</span><p class='text-secondary'>Blend until smooth and creamy.</p></div>",
         "<div class='d-flex'><span class='rounded-3 text-center me-1' style='background-color:#FE4722; color:white;width:30px; height:30px;'>3</span><p class='text-secondary'>Pour into a glass and serve chilled.</p></div>",
    ],
    Calories:"250 kcal",
    Carbohydrates:"45g",
    Fiber:"5g",
    Protein:"4g",
    Fat:"7g",
    Sodium:"90mg",
    chefTips: [
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB; '>
           <span class='w-25 h-25 rounded-circle p-1 text-center me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
           Use ripe bananas for natural sweetness
        </div>`,
        `<div class='col-12 rounded-2 p-3 mb-3' style='border-left: 3px solid #FFB900;background-color:#FFFBEB;'>
           <span class='w-25 h-25 rounded-circle p-1 text-center  me-1' style='background-color:#E17100; color:#FFFBEB;'><i class="fa-solid fa-check"></i></span>
           Add a scoop of protein powder for a post-workout boost
        </div>`,
    ]
 }

]


function display(index){
   var meal=mealList[index];

   mealimage.src=meal.image;
   mealrate.innerHTML=meal.rating;
   mealreview.innerHTML=meal.reviews;
   PrepTime.innerHTML=meal.prepTime;
   CookTime.innerHTML=meal.cookTime;
   Servings.innerHTML=meal.servings;
   mealProperty.innerHTML=meal.property;
   mealCountry.innerHTML=meal.country;
   titleName.innerHTML=meal.title;
   titleDetails.innerHTML=meal.description;
   cardIngredients.innerHTML=meal.ingredients;
   cardInstructions.innerHTML=meal.instructions;
   cardChef.innerHTML=meal.chefTips;
   Calories.innerHTML=meal.Calories;
   Carbohydrates.innerHTML=meal.Carbohydrates;
   Fiber.innerHTML=meal.Fiber;
   Protein.innerHTML=meal.Protein;
   Fat.innerHTML=meal.Fat;
   Sodium.innerHTML=meal.Sodium;


}


function randomMeal(){
    var newIndex = Math.floor(Math.random() * mealList.length);
   while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * mealList.length);
   }
  currentIndex = newIndex;
  display(currentIndex);
}

display(currentIndex);