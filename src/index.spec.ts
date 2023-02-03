import * as f from './index';

describe('Index', () => {
    

    it('should say hello', () => {

        jest.spyOn(f, 'returnFromage').mockReturnValue("hello");
        expect(f.returnFromage()).toBe('hello');
    });

    it('should return color', () => {
        const color = {"id":2,"name":"fuchsia rose","year":2001,"color":"#C74375","pantone_value":"17-2031"};
        const user = {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"};
        expect(f.mapper(user, color as f.ReponseApiColorData).color).toBe("#C74375");
    });

});
