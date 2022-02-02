
/*export async function RequestData<T>(
  request:RequestInfo,text:string): Promise<T> {
  

}*/

export async function RequestData(drink:string){
  const urlcomplete:string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
  return fetch(urlcomplete);
}