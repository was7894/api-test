/* KOREAN BUTTON */
let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", () => {
  sendApiRequest();
  
  
});

//api promise fetch
async function sendApiRequest() {
  let APP_ID = "e9af3c1c";
  let API_KEY = "287ddc6bfccb96c0d47866b92b186ab2";

  let random_num=[];
  let i = 0;
  let random_num1 ,random_num2;

   //url
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=korean`);
  let data = await response.json();
  console.log(data);

  //random
  while(i<2){
    let n = Math.floor(Math.random() * 10); /* 0~9 */
    // return == false; arr.push
    if(! same_num(n)){
      random_num.push(n);
      i++;
    }
  }
  //중복숫자방지
  function same_num(n) {
    for(let i=0; i<random_num.length; i++){
      if(n === random_num[i]){
        return true; /* true; no push */
      }
    }
    return false;
  }
  random_num1 = random_num[0];
  random_num2 = random_num[1];

  useApiData(data, random_num1, random_num2);
}

function useApiData(data, num1, num2) {
  let title1 = "error";
  let title2 = "error";

  switch(num1){
    case 0 :
      title1 = "쌈장 레시피";
      break;
    case 1 :
      title1 = "바베큐 그릴 고구마";
      break;
    case 2 :
      title1= "로메인 샐러드";
      break;
    case 3 :
      title1 = "메밀국수";
      break;
    case 4 :
      title1 = "양념치킨";
      break;
    case 5 :
      title1 = "스파이시 바비큐 버터 불고기";
      break;
    case 6 :
      title1 = "두부조림";
      break;
    case 7 :
      title1 = "간장불고기";
      break;
    case 8 :
      title1 = "고등어구이";
      break;
    case 9 :
      title1 = "닭가슴살 비빔밥";
      break;
  }

  switch(num2){
    case 0 :
      title2 = "쌈장 레시피";
      break;
    case 1 :
      title2 = "바베큐 그릴 고구마";
      break;
    case 2 :
      title2 = "로메인 샐러드";
      break;
    case 3 :
      title2 = "메밀국수";
      break;
    case 4 :
      title2 = "양념치킨";
      break;
    case 5 :
      title2 = "스파이시 바비큐 버터 불고기";
      break;
    case 6 :
      title2 = "두부조림";
      break;
    case 7 :
      title2 = "간장불고기";
      break;
    case 8 :
      title2 = "고등어구이";
      break;
    case 9 :
      title2 = "닭가슴살 비빔밥";
      break;
  }
  /* (${data.hits[num1].recipe.label}) */
  //출력
  document.querySelector(".content1").innerHTML = `
<div class="card m-4" style="width: 20rem;">
  <h5 class="  card-title">${title1}<br></h5>
  <img src="${data.hits[num1].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">칼로리: ${data.hits[num1].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} Kcal</p>
    <p class="card-text">탄수화물: ${data.hits[num1].recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</p>
    <p class="card-text">단백질: ${data.hits[num1].recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</p>
    <p class="card-text">지방: ${data.hits[num1].recipe.totalNutrients.FAT.quantity.toFixed(2)} g</p>
    <img src="./images/img_200b.png" alt="">
  </div>
</div>`;

  /* (${data.hits[num2].recipe.label}) */
  document.querySelector(".content2").innerHTML = `
<div class="card m-4" style="width: 20rem;">
  <h5 class="card-title ">${title2}<br></h5>
  <img src="${data.hits[num2].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">칼로리:  ${data.hits[num2].recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)} Kcal</p>
    <p class="card-text">탄수화물: ${data.hits[num2].recipe.totalNutrients.CHOCDF.quantity.toFixed(2)} g</p>
    <p class="card-text">단백질: ${data.hits[num2].recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g</p>
    <p class="card-text">지방: ${data.hits[num2].recipe.totalNutrients.FAT.quantity.toFixed(2)} g</p>
    <img src="./images/img_200t.png" alt="">
    <a href="https://kr.freepik.com/free-vector/cute-turtle-chef-cooking-cartoon-illustration_14877534.htm#page=4&query=mascot%20chif&position=15&from_view=search&track=ais" style="font-size: 2px; text-decoration:none; color:black;">출처:Freepik </a>
    
</div>`;
}
/* <a href="${data.hits[num2].recipe.url}" class="btn btn-primary">레시피 보기</a> 
<a href="${data.hits[num1].recipe.url}" class="btn btn-primary">레시피 보기</a>*/