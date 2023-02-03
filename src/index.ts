import axios, {AxiosResponse} from 'axios';

//npx ts-node --esm src/index.ts

type FirstName = string;

type LastName = string;

type ReponseApiUserData = { id: number, email: string, first_name:FirstName, last_name: LastName } 
type ResponseApiUser = {page: number, data : ReponseApiUserData[]}

export type ReponseApiColorData = { id: number, name: string, year:number, color: Color, pantone_value: string }
type ResponseApiColor = {data : ReponseApiColorData}




type Color = `#${string}`;

async function getUser(firstName: FirstName) : Promise<ReponseApiUserData>{

    const response: AxiosResponse<ResponseApiUser> = await axios.get('https://reqres.in/api/users?page=1');
    return response.data.data.find(u => u.first_name === firstName)
}

async function getColor(id: number): Promise<ReponseApiColorData>{

    const response: AxiosResponse<ResponseApiColor> = await axios.get(`https://reqres.in/api/unknown/${id}`);
    return response.data.data;
}



/*type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e'| 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type Color = `#${Digit}${Digit}${Digit}${Digit}${Digit}`;


const color : Color = "#BF1932"*/






class Person{
    constructor(public name, public color: Color, public email: string){

    }
}

function isColor(obj: unknown): obj is ReponseApiColorData {
    const m = obj as ReponseApiColorData;
    return typeof obj === 'object' && 'color' in obj && m.color.length === 7;
}

export function mapper(user: ReponseApiUserData, color: ReponseApiColorData): Person{


    if(isColor(color)){
            return new Person(`${user.first_name} ${user.last_name} `, color.color, user.email)
    }
    else {
        throw Error();
        //return new Person(`${user.first_name} ${user.last_name} `, color.color, user.email)
    }


}

export function returnFromage(){
    return 'fromage;'
}

//const user = await getUser('Janet')
//const color = await getColor(user.id)


//console.log(mapper(user, color));