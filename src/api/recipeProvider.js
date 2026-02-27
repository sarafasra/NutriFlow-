
export async function getRecipes() {
    try{
        const fetchdata =await fetch("https://dummyjson.com/recipes");
        const data =await fetchdata.json()
        console.log(data);
        return data.recipes;
        
    }catch(error){
       console.log("error", error);
        
    }
}  
