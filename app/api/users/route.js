export async function GET(request){
    const v = [{name:"Bruce Wayne",password:"123"},{name:"Son Goku",password:"123"}, {name:"Clark Kent",password:"123"},{name:"Dextor Abrahams",password:"123"}];
    return new Response(JSON.stringify(v));
}