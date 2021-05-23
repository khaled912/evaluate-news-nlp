import { URL_Validation } from '../js/checkURL'
describe('Test URL_Validation', () => {
    test('Testing URL_Validation defined or not', () => {
        expect(URL_Validation).toBeDefined();
    })

    test(' URL_Validation return false for invalid url', () => {
        expect( URL_Validation("")).toBeFalsy();
    })

    test('URL_Validation return true for valid url', () => {
        expect(URL_Validation("https://jamesclear.com/decision-making")).toBeTruthy();

    })
})
